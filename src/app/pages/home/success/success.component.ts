import { Component, OnInit } from '@angular/core';
declare function sendConversion(): void;
@Component({
  selector: 'molla-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    sendConversion();
  }

}
