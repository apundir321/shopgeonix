import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'molla-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.scss']
})
export class TrackorderComponent implements OnInit {

  orderinfo:any

  constructor(private http: HttpClient, private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit (data) {
		console.log('console data from submit order track', data.trackid);
    const formData = new FormData();
    formData.append("apikey", "270710b275897200");
    formData.append("awb", data.trackid);
    this.http.post('http://frusolutions.in/v2/api/api/GetOrderStatusByAWBs', formData).subscribe(
      (response) => {
        // Handle success response
        console.log('API response:', response);
        this.orderinfo = response[0].response;
      },
      (error:HttpErrorResponse) => {
        // Handle error
        console.error('API error:', error)
        this.toaster.error("Invalid Credentials!")
        location.reload()
      }
    );
	}
}
