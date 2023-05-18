import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molla-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.scss']
})
export class CarouselBasicComponent implements OnInit {

  arrayvalue:any = [
    254, 45, 212, 365, 2543
  ]
  newval:any;

  constructor() {}

  ngOnInit(): void {
    this.newvalues();
  }

  newvalues () {
    this.newval = this.arrayvalue[Math.floor(Math.random()*this.arrayvalue.length)];
    console.log('console random values of an array', this.newval);
  }


}
