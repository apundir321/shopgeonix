import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molla-refrence-code',
  templateUrl: './refrence-code.component.html',
  styleUrls: ['./refrence-code.component.scss']
})
export class RefrenceCodeComponent implements OnInit {

  myValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getValue(inputValue: string) {
    console.log('Input Value:', inputValue);
    localStorage.setItem('couponvalue', inputValue);
    window.alert('coupon have been applied succesfully');
    // You can now use the inputValue as needed in your component.
  }

}
