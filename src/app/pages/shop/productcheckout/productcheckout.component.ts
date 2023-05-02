import { Component, OnInit,HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OfferServiceService } from 'src/app/shared/services/offer-service.service';
import { MasterService } from 'src/app/shared/services/master.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';


declare var Razorpay:any

// import { AnyRecord } from 'dns';


@Component({
  selector: 'molla-productcheckout',
  templateUrl: './productcheckout.component.html',
  styleUrls: ['./productcheckout.component.scss']
})
export class ProductcheckoutComponent implements OnInit {

  userForm:any
	submitted = false;
  pid:any
  loader:boolean = false;
  info:any
  change:any
  total:any
  offervalue:any
  discountoffer:any
  discount:number=0;
 paymentMode="RZP";
 varient:number;
 token:any=localStorage.getItem("token");
 AllOrder: any;
	order: any;

	showCoupon:boolean =false;
	couponApplied:boolean = false;
	couponCodeApplied:string = '';
	finalamount:any;


  constructor(private formBuilder: FormBuilder,
    private activeRoute:ActivatedRoute,
    private offer:OfferServiceService,
    private master: MasterService,
    private toaster:ToastrService,
    private route:Router) { 

		// alert("IS");
    this.activeRoute.params.subscribe((params)=>{
      console.log("product-checkout",params.id)
      this.pid = params.id
				
    })
  }

  ngOnInit(): void {
	// alert("IS");
	console.log("inside checkout &&&&&&&&&&&&&&");
	this.activeRoute.queryParams.subscribe(res=>{
		console.log("activateroute",res);
		this.varient = res.varient
	})

    this.offer.getqty().subscribe(res=>{
      console.log("hjgdj",res)
      this.change = res
    })


    this.master.getMethod(`/product/info/${this.pid}`).subscribe(res=>{
      console.log("gggggg",res)
      this.info = res['data'][0]
      console.log(this.info)
	  for(let x of this.info.variants){
		console.log(x)
		if( x.id == this.varient){
			this.total = x.price*this.change;
		}
	}
    this.master.getMethod(`/offer/product/${this.pid}`).subscribe(res=>{
      console.log("offerproduct",res)
      this.offervalue = res
      this.discountoffer = this.total
      console.log(this.total)
      if(this.offervalue.length != 0){
        this.discount = this.offervalue[0].discountType == "PERCENT"?(this.offervalue[0].amount*this.discountoffer)/100:this.offervalue[0].amount*this.change
        this.discountoffer = this.discountoffer - this.discount;
      }
      console.log("amout",this.discountoffer)
    })
	let token = localStorage.getItem('token');
	if(token){
	this.GetAllOrder().subscribe((data)=>{
		console.log(" data===="+data);
		if(data['data'].length>0){
			this.order=data['data'][0];
			console.log(this.order);
			let shipData ={
				"firstName":this.order['shippingAddress']['name'],
				"city":this.order['shippingAddress']['city'],
				"country":this.order['shippingAddress']['country'],
				"address":this.order['shippingAddress']['street'],
				"Email":this.order['shippingAddress']['email'],
				"Phone":this.order['shippingAddress']['mobile'],
				"pinNumber":this.order['shippingAddress']['pincode'],
				"state":this.order['shippingAddress']['state'],
				"gst":this.order['shippingAddress']['gst']
			}
			this.userForm.patchValue(shipData);
		}
	});
	}
    })
	



    this.userForm=this.formBuilder.group(
      {
  
        firstName:['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]],
        lastName:['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]],
        country:['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]],
        // address:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_ ]{3,20}$')]],
		address:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9/,.*-_ ]{3,200}$')]],
 
        city:['', Validators.required],
        state:['', Validators.required],
        pinNumber:['', [Validators.required,Validators.pattern('[0-9 ]{6}')]],
        Phone:['', [Validators.required,Validators.pattern('[0-9 ]{10}')]],
        Email:['', [Validators.required,Validators.pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')]],
		gst:['']
      }
         );

  }

  onItemChange(e:any){
	// console.log(" Value is : ", e.target.value );
	this.paymentMode = e.target.value;
	if(this.paymentMode==='COD'){
	if(this.couponApplied){
		this.couponApplied=false;
		this.couponCodeApplied='';
		this.discountoffer = this.total;
		this.showCoupon=true;
	}
	}
 }

  get f(): { [key: string]: AbstractControl } {
		return this.userForm.controls;
	  }

	  placeorder(){
		let paymentString = "";
		let coupon = undefined;
		const ele = document.getElementById("flexRadioDefault2") as HTMLInputElement;
		
		
		if(ele.checked==true){
			paymentString='COD';
		}	  
		else{
			paymentString = 'RZP';
		}
		if(this.token){
		  this.loader = true;
		  this.submitted = true;
	  
			  if (this.userForm.invalid) {
			  this.loader = false;
				return;
			  }
	  
			if(this.couponApplied){
				coupon = this.couponCodeApplied;
			}
		  const data={
				  "productId":this.pid,
			"variantId":this.varient,
			"quantity":this.change,
			"couponcode":coupon,
				  "paymentMethod":paymentString,
				  "amount":this.discountoffer,
				  "shippingAddress":{
					"name":this.userForm.get("firstName")?.value + this.userForm.get("lastName")?.value,
					"country":this.userForm.get("country")?.value,
					"street":this.userForm.get("address")?.value,
					"state":this.userForm.get("state")?.value,
					"city":this.userForm.get("city")?.value,
					"pincode":this.userForm.get("pinNumber")?.value,
					"mobile":this.userForm.get("Phone")?.value,
					"email":this.userForm.get("Email")?.value,
					"gst":this.userForm.get("gst")?.value
				  }
			  }
			  console.log("cart",this.pid)
			  // location.reload()
		  // console.log("card-remove",this.cartService.removeFromCart(this.cartItems))
			  this.master.methodPost(data,"/order/product").subscribe(res=>{
				  console.log(res, res.msg=="make payment");
				  this.loader = false;
				  if(!res.status){
					alert("something Wrong Check Once Again")
				  }
				  if( res.msg=="make payment"){
					  console.log("hi");
					var options = {
					  "key": environment.razorKey, // Enter the Key ID generated from the Dashboard
					  "amount": res.data[1], // razorpay amount 
					  "currency": "INR",
					  "name": "Geonix",
					  "description": "Geonix Payment",
					  "image": "https://www.geonix.in/assets/images/geonix-logo.webp",
					  "order_id": res.data[0], //razorpay id 
					  "handler":function(response:any){
						  console.log(response);
						  let data = response;
						  // data["order"]={"id":res.data[2}
						  var event = new CustomEvent("successPayment",{
							  detail:data,
							  bubbles:true,
							  cancelable:true
						  })
					   window.dispatchEvent(event);
					  },
					  "prefill": {
						"name": this.userForm.get("firstName")?.value + this.userForm.get("lastName")?.value,
						"email": this.userForm.get("Email")?.value,
						"contact": this.userForm.get("Phone")?.value
					},
					  "notes": {
						  "address": "Razorpay Corporate Office"
					  },
					  "theme": {
						  "color": "#0e2c5e"
					  }};
					  var rzp1 = new Razorpay(options);
					  rzp1.open();
					  rzp1.on('payment.failed', function (response: any) {
					  //   Todo - store this information in the server
						console.log(response.error.code);
						console.log(response.error.description);
						console.log(response.error.source);
						console.log(response.error.step);
						console.log(response.error.reason);
						console.log(response.error.metadata.order_id);
						console.log(response.error.metadata.payment_id);
					  }
					  );
				  }else{
				  this.loader = false;
				  this.toaster.success("Order Successfull!")
				  this.route.navigate(["/success"])
					}
				  },error=>{
				  this.loader = false;
					  this.toaster.error("internal server error");
				  })
	  
		}
		  else{
			  this.loader = true;
	  this.submitted = true;
  
		  if (this.userForm.invalid) {
		  this.loader = false;
			return;
		  }
  
		  if(this.couponApplied){
			coupon = this.couponCodeApplied;
		}
	  const data={
			  "productId":this.pid,
		"variantId":this.varient,
		"quantity":this.change,
			  "paymentMethod":paymentString,
			  "amount":this.discountoffer,
			  "couponcode":coupon,
			  "shippingAddress":{
				"name":this.userForm.get("firstName")?.value +" "+ this.userForm.get("lastName")?.value,
				"country":this.userForm.get("country")?.value,
				"street":this.userForm.get("address")?.value,
				"state":this.userForm.get("state")?.value,
				"city":this.userForm.get("city")?.value,
				"pincode":this.userForm.get("pinNumber")?.value,
				"mobile":this.userForm.get("Phone")?.value,
				"email":this.userForm.get("Email")?.value,
				"gst":this.userForm.get("gst")?.value
			  }
		  }
		  console.log("cart",this.pid)
		  // location.reload()
	  // console.log("card-remove",this.cartService.removeFromCart(this.cartItems))
		  this.master.methodPost(data,"/order/guest").subscribe(res=>{
			  console.log("guest",res)
			  localStorage.setItem("token", res['response'].guestToken);
			  localStorage.setItem("userId", res['response'].guestId);
			  console.log(res, res.msg=="make payment");
			//   alert( res['response'].guestToken)
			  this.loader = false;
			  if(!res.status){
				alert("something Wrong Check Once Again")
			  }
			  if( res.msg=="make payment"){
				  console.log("hi");
				var options = {
				  "key": environment.razorKey, // Enter the Key ID generated from the Dashboard
				  "amount": res.data[1], // razorpay amount 
				  "currency": "INR",
				  "name": "Geonix",
				  "description": "Geonix Payment",
				  "image": "https://www.geonix.in/assets/images/geonix-logo.webp",
				  "order_id": res.data[0], //razorpay id 
				  "handler":function(response:any){
					  console.log(response);
					  let data = response;
					  // data["order"]={"id":res.data[2}
					  var event = new CustomEvent("successPayment",{
						  detail:data,
						  bubbles:true,
						  cancelable:true
					  })
				   window.dispatchEvent(event);
				  },
				  "prefill": {
					"name": this.userForm.get("firstName")?.value + this.userForm.get("lastName")?.value,
					"email": this.userForm.get("Email")?.value,
					"contact": this.userForm.get("Phone")?.value
				},
				  "notes": {
					  "address": "Razorpay Corporate Office"
				  },
				  "theme": {
					  "color": "#0e2c5e"
				  }};
				  var rzp1 = new Razorpay(options);
				  rzp1.open();
				  rzp1.on('payment.failed', function (response: any) {
				  //   Todo - store this information in the server
					console.log(response.error.code);
					console.log(response.error.description);
					console.log(response.error.source);
					console.log(response.error.step);
					console.log(response.error.reason);
					console.log(response.error.metadata.order_id);
					console.log(response.error.metadata.payment_id);
				  }
				  );
			  }else{
			  this.loader = false;
			  this.toaster.success("Order Successfull!")
				  window.location.href = '/success';
				}
			  },error=>{
			  this.loader = false;
				  this.toaster.error("internal server error");
			  })
  
		  }
  
	  
	}

  @HostListener('window:paymentSuccess',['$event'])
			paymentSuccess(event:any){
			  console.log("detail-rzr",event.detail)
			  const data = {
				razorpayPaymentId: event.detail.RZPPID,
				razorpayOrderId :event.detail.RzpOid,
				razorpaySignature: event.detail.RzpSign	
			  }
			  this.master.methodPut(data,`/order/validatePayment`).subscribe((res:any)=>{
				console.log(res)
			  })
			}
			// onSubmit(){
			//   var firstName=this.userForm.get("firstName")?.value;
			//   var lastName=this.userForm.get("lastName")?.value;
			//   var email=this.userForm.get("Email")?.value;
			//   var phone=this.userForm.get("Phone")?.value;
			//   var state=this.userForm.get("state")?.value;
			//   var city=this.userForm.get("city")?.value;
			//   var pin=this.userForm.get("pinNumber")?.value;
			//   var address=this.userForm.get("address")?.value;
			//  console.log(firstName,lastName,email,phone,state,city,pin,address)
			// }
			@HostListener("window:successPayment",['$event'])
			onPaymentSuccess(event:any):void {
			  console.log("event-razor",event);
			  let data = {
				'razorpayOrderId':event.detail.razorpay_order_id,
				'razorpayPaymentId':event.detail.razorpay_payment_id,
				'razorpaySignature':event.detail.razorpay_signature
			  }
			  debugger
			 
			  this.master.methodPut(data,`/order/validatePayment`).subscribe((res:any)=>{
				console.log("razor-res",res);
				if(res.status){
				  this.toaster.success("Order Successfull!")
				//   this.route.navigate(["shop/dashboard"])
				// this.route.navigate(["/success"])
				window.location.href = '/success';
				//  location.reload()
				}else{
				  this.toaster.error("payment failed");
				  this.route.navigate(["/dashboard"])
			   
				}
			  })
		  
			}

			GetAllOrder(){
				return this.master.getMethod("/order/user/list");
			}

			addOpacity(event: any) {
				if(!this.couponApplied){
				this.showCoupon = true;
				event.target.parentElement.querySelector("label").setAttribute("style", "opacity: 0");
				event.stopPropagation();
			}
			
			}
			
			applycoupon()
			{
				let paymentString = "";
		const ele = document.getElementById("flexRadioDefault2") as HTMLInputElement;
		
		
		if(ele.checked==true){
			paymentString='COD';
		}	  
		else{
			paymentString = 'RZP';
		}
				let coupon = (<HTMLInputElement>document.getElementById("checkout-discount-input")).value;
				if(coupon===''|| coupon ==undefined)
			{
				this.toaster.error("Please enter coupon code");
			}else if(paymentString=='COD'){
				this.toaster.error("This coupon code is available for Online payment only! Please select online payment option.");
			}
				else if(coupon==='PREPAID')
				{
					this.toaster.success("Coupon Applied");
					this.couponApplied = true;
					this.couponCodeApplied = coupon;
					this.showCoupon = false;
					console.log(this.total);
					let couponDiscountPrice = this.discountoffer - this.discountoffer*5/100;
					console.log(this.discountoffer - this.discountoffer*5/100);
					this.discountoffer = Math.round(couponDiscountPrice);
				}
				else{
					this.toaster.error("Coupon Not Valid!")
				}
			}

}
