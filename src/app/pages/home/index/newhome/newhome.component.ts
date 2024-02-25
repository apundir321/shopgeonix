import { Component, OnInit } from '@angular/core';
import { teamslider } from '../../data';

@Component({
  selector: 'molla-newhome',
  templateUrl: './newhome.component.html',
  styleUrls: ['./newhome.component.scss']
})
export class NewhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: any = {
    center: true,
    items:3,
    loop:true,
    margin: -1,
    nav:false,
    dots:true,
    navigator: true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  };

  customOptions2: any = {
    center: true,
    items:1,
    loop:true,
    // margin: 10,
    nav:false,
    dots:false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 10000,
    autoplaySpeed: 30000,
    autoplayHoverPause: false,
  };

}
