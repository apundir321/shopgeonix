import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'molla-extended-warranty',
  templateUrl: './extended-warranty.component.html',
  styleUrls: ['./extended-warranty.component.scss']
})
export class ExtendedWarrantyComponent implements OnInit {

  constructor(private toastr:ToastrService, private route: Router, private http: HttpClient) {
    emailjs.init('service_kgkl43o');
  }

  ngOnInit(): void {
  }

  formData = {
    name: "",
    mobileno: "",
    email: "",
    state: "",
    marketName: "",
    serialNumber: "",
    prodeuctName: "",
    note: ""
  };

  onSubmit() {
    console.log('form data is consoled here', this.formData)

    if((this.formData.name == "" || this.formData.name == null) || (this.formData.mobileno == "" || this.formData.mobileno == null) || (this.formData.email == "" || this.formData.email == null) || (this.formData.state == "" || this.formData.state == null) || (this.formData.marketName == "" || this.formData.marketName == null) || (this.formData.serialNumber == "" || this.formData.serialNumber == null) || (this.formData.prodeuctName == "" || this.formData.prodeuctName == null) || (this.formData.note == "" || this.formData.note == null)){
      this.toastr.error('all fields are required')
    }else {
      this.http.post('https://geonixbackend.in/product/insert_invoice', this.formData)
      .subscribe(response => {
        console.log('Form submitted successfully!', response);
        this.route.navigate(["/thank-you"])
        // this.toastr.success('Form submittied successfully:');
        // this.formData = {
        //   name: "",
        //   mobileno: "",
        //   email: "",
        //   state: "",
        //   marketName: "",
        //   serialNumber: "",
        //   prodeuctName: "",
        //   note: ""
        // };
      }, error => {
        console.error('Error submitting form:', error);
        this.toastr.error(error.text)
      });
    }

    // emailjs.send('service_kgkl43o', 'template_c1gv4ng', this.formData, '45q9_sOUAyc3UYhNO')
    // .then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });
  }

  onFileChange(event: any) {  
    const file = event.target.files[0]
    console.log('file is console here', file)
  }
}
