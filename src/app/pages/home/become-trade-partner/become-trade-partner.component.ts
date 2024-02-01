import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'molla-become-trade-partner',
  templateUrl: './become-trade-partner.component.html',
  styleUrls: ['./become-trade-partner.component.scss']
})
export class BecomeTradePartnerComponent implements OnInit {

  constructor(private toastr:ToastrService, private route: Router) {
    emailjs.init('service_kgkl43o');
  }

  ngOnInit(): void {
  }

  formData = {
    firm_name: '',
    partner_type: '',
    status: '',
    pan_no: '',
    gst: '',
    person_name_title: '',
    person_name: '',
    person_mobileno: '',
    person_landlineno: '',
    person_email: '',
    address: '',
    pin_code: '',
    state: '',
    city: '',
    type_of_business: '',
    no_of_sale_staff: '',
    turnover_lakes: '',
    brands_dealing_with: '',
    product_dealing_with: ''
  };

  onSubmit() {
    console.log('Form data submitted:', this.formData);
    this.formData.person_name == ""
    if(this.formData.person_name == "" || this.formData.person_name == null){
      this.toastr.error('Name is required');
    }
    else if (this.formData.person_email == "" || this.formData.person_email == null) {
      this.toastr.error('Mail is required');
    }
    else if (this.formData.person_mobileno == "" || this.formData.person_mobileno == null) {
      this.toastr.error('Number is required');
    }
    else{
      emailjs.send('service_kgkl43o', 'template_gerkzo4', this.formData, '45q9_sOUAyc3UYhNO')
      .then((response) => {
        console.log('Email sent successfully:', response);
        this.formData = {
          firm_name: '',
          partner_type: '',
          status: '',
          pan_no: '',
          gst: '',
          person_name_title: '',
          person_name: '',
          person_mobileno: '',
          person_landlineno: '',
          person_email: '',
          address: '',
          pin_code: '',
          state: '',
          city: '',
          type_of_business: '',
          no_of_sale_staff: '',
          turnover_lakes: '',
          brands_dealing_with: '',
          product_dealing_with: ''
        };
        this.route.navigate(["/thank-you"])
        // this.toastr.success('Email sent successfully:');
      }, (error) => {
        console.error('Email send failed:', error);
        this.formData = {
          firm_name: '',
          partner_type: '',
          status: '',
          pan_no: '',
          gst: '',
          person_name_title: '',
          person_name: '',
          person_mobileno: '',
          person_landlineno: '',
          person_email: '',
          address: '',
          pin_code: '',
          state: '',
          city: '',
          type_of_business: '',
          no_of_sale_staff: '',
          turnover_lakes: '',
          brands_dealing_with: '',
          product_dealing_with: ''
        };
        this.toastr.error('Email send failed:', error);
      });
    }
  }

}
