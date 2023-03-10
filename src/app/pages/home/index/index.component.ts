import { Component, DebugNode, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { introSlider, brandSlider,cats,testiSlider } from '../data';
import { MasterService } from 'src/app/shared/services/master.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
// import { getMaxListeners } from 'process';
declare var $:any;

@Component({
	selector: 'molla-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
	cats = cats;
	emailForm?:any
	categoryList:any=[]
	categorydata:any=[]

	products = [];
	getoffer:any
	posts = [];
	loaded = false;
	introSlider = introSlider;
	brandSlider = brandSlider;
	testiSlider =testiSlider;
	loader:boolean = false;


	constructor(public apiService: ApiService,
		 public utilsService: UtilsService, 
		 private modalService: ModalService,
		 private master:MasterService,
		 private category:CategoryService,
		 private toaster:ToastrService) {
		// this.modalService.openNewsletter();

		// this.apiService.fetchHomeData().subscribe(result => {
		// 	this.products = result.products;
		// 	this.posts = result.blogs;
		// 	this.loaded = true;
		// })
		// this.getlist()

		this.emailForm = new FormGroup({
			email : new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")])
		  })
	}
	
	// guar

	ngOnInit(): void {
	
		this.offerList()
		this.getlist()
		this.getproduct()
		
	}

	offerList(){
		this.master.getMethod('/offer/list').subscribe(res=>{	
			this.getoffer = res
			console.log("offerlist",this.getoffer)
			localStorage.setItem("offerData",JSON.stringify(res));
			// this.offerService.setofferList(res);
		})
	}


	// onsubmit(){
	// 	var email = this.emailForm.get("email")?.value;
	// 	alert(email);
	// };

	onSave(){ 
		// this.loader = true;
		
		var email = this.emailForm.get("email").value;
		// alert(email)
		if(email=="" || email==null){
			this.toaster.error("Please Enter The Email");
			return false
		}else{
			var data = {
				service_id: 'service_8zp4yhp',
				template_id: 'template_g2neitr',
				user_id: 'user_mTjMBBP092bpZsnZTyLfp',
				template_params: {
					// 'company': 'Black Brusa',
					'to_mail': 'princeantil2608@gmail.com',
					'user_email': email
				}
			  };	
	
			  this.master.sendMail(data).subscribe(res=>{
				
		// this.loader = false;
				
			  }, err=>{
				// this.loader = false;

				 this.toaster.success("Subscribed Successfully!")
				 this.emailForm.reset()
			  });
			  return true
		}
		
	
	}


	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		dots: true,
		autoplay: true,
		autoplaySpeed:3000,
		navSpeed: 700,
		navText: ['', ''],
		responsive: {
		  0: {
			items: 1
		  },
		  400: {
			items: 2
		  },
		  740: {
			items: 3
		  },
		  940: {
			items: 4
		  }
		},
		nav: true
	  }




	getlist(){
		this.master.getMethod("/GetCategories").subscribe(data=>{
			// console.log(data);
			this.categorydata=data;
			// console.log("this.categoryList",this.categoryList)
			this.category.setCategoryList(data)
			// console.log("list-slider",this.categoryList)
	})
}

getproduct(){
	this.master.getMethod("/product/list").subscribe(res=>{
		console.log("product-list",res['data'])
		this.products=res['data'];
		console.log("this.productssss");
		console.log(this.products);
		this.loaded = true;
})


}


}
