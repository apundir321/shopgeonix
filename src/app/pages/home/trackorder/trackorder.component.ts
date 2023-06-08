import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'molla-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.scss']
})
export class TrackorderComponent implements OnInit {

  @ViewChild('trackOrder', { static: false }) trackOrder: NgForm;

  orderinfo:any
  resinfo:any

  constructor(private http: HttpClient, private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit (data) {
		console.log('console data from submit order track', data.trackid);
    const formData = new FormData();
    formData.append("apikey", "270710b275897200");
    formData.append("awb", data.trackid);
    this.http.post('https://frusolutions.in/v2/api/api/GetOrderStatusByAWBs', formData).subscribe(
      (response) => {
        // Handle success response
        this.resinfo = response;
        console.log('API Response', response);
        if(this.resinfo.status == "error"){
          this.toaster.error('Invalid AWB No or APIKEY.')
        }else {
        this.orderinfo = response[0].response;
        this.toaster.success("valid Credentials!");
        }
      },
      (err) => {
        // Handle error
        // console.error(err.error);
      }
    )
    this.trackOrder.resetForm();
	}

  handleClick(data): void {
    // Access values or perform operations here
    console.log(data);
    const formData = new FormData();
    formData.append("apikey", "270710b275897200");
    formData.append("awb", data);
    this.http.post('http://frusolutions.in/v2/api/api/GetOrderStatusByAWBsall', formData).subscribe(
      (response) => {
        console.log('console response full data', response);
      },
      (err) => {
        // Handle error
        console.log('console err full data', err);
      }
    )
  }
}
