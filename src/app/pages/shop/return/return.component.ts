import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/shared/services/cart.service';
import { MasterService } from 'src/app/shared/services/master.service';
import { environment } from 'src/environments/environment';
import { CartItem } from 'src/app/shared/classes/cart-item';
import { OrderIdService } from 'src/app/shared/services/order-id.service';
import { OfferServiceService } from 'src/app/shared/services/offer-service.service';

declare var $: any;
declare var Razorpay:any

@Component({
  selector: 'molla-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {
	cardData1:any
	cart_id:any
	rzrRes:any=[]
 paymentMode="RZP";
	userForm:any
	submitted = false;
	productId:any=[]
	sumall:any
	cartItems = [];
	getorderid:any
	discount:number=0
	finalamount:any
	totalQuantity : number = 0;
	cartData : any ;
	totalAmount : number = 0;
	loader:boolean = false;
  orderId : any;
	
	CarListId:any=[]
	private subscr: Subscription;
  myorder: any;

	constructor(public cartService: CartService,private master: MasterService,private formBuilder: FormBuilder,
		public toaster:ToastrService, public activeRoute:ActivatedRoute, route:Router,private orderid:OrderIdService,private offer:OfferServiceService) {


	}

	ngOnInit(): void {

    const id = this.activeRoute.snapshot.paramMap.get('id');
    console.log("id of order",id)
    this.orderId=id;

    this.master.getMethod(`/order/${id}`).subscribe(res=>{
      console.log("detail",res['data'])
      this.myorder = res['data']
  })

		

		this.userForm=this.formBuilder.group(
		{
			
			reason:['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]],
			remarks:['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]]
			// country:['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]],
			// // address:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_ ]{3,200}$')]],
			// address:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9/,.*-_ ]{3,200}$')]],
			// city:['', Validators.required],
			// state:['', Validators.required],
			// pinNumber:['', [Validators.required,Validators.pattern('[0-9 ]{6}')]],
			// Phone:['', [Validators.required,Validators.pattern('[0-9 ]{10}')]],
			// Email:['', [Validators.required,Validators.pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')]]
 
		}
		   );
	}

	// onItemChange(e:any){
	// 	// console.log(" Value is : ", e.target.value );
	// 	this.paymentMode = e.target.value
	// 	console.log(this.paymentMode)
	//  }


	
	

	get f(): { [key: string]: AbstractControl } {
		return this.userForm.controls;
	  }

	// getCardData(){
	// 	this.master.getMethod("/cart/list").subscribe((res:any)=>{
	// 	   this.cardData1=res.data;
	// 	   console.log(this.cardData1)
	// 	   for(let x=0;x<this.cardData1.length ;x++){
	// 		this.productId.push({"id":this.cardData1[x].id})
	// 	   }
		  
		  
	
		  
	// 	})
	//   }


	placeorder(){
		
		this.loader = true;
		this.submitted = true;

		if (this.userForm.invalid) {
		this.loader = false;
		  return;
		}
	
		console.log(JSON.stringify(this.userForm.value, null, 2));
		
		// firstName:['', Validators.required],
		// 	lastName:['', Validators.required],
		// 	country:['', Validators.required],
		// 	address:['', Validators.required],
		// 	city:['', Validators.required],
		// 	state:['', Validators.required],
		// 	pinNumber:['', Validators.required],
		// 	Phone:['', Validators.required],
		// 	Email:['', Validators.required]
  }
}