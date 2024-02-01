import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { gtag, install } from 'ga-gtag';

declare function sendConversion(): void;
@Component({
  selector: 'molla-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  price:any;
  name:any;
  total:any;
  status:any;
  condition:any; 

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      this.name = params['key1'];
      this.price = params['key2'];
      this.total = params['key3'];
      this.status = 'ordered';
      console.log(this.name, this.price, this.total, this.status)
      gtag("event", "purchase", {
        transaction_id: "T_12345_1",
        value: 25.42,
        tax: 4.90,
        shipping: 5.99,
        currency: "USD",
        coupon: "SUMMER_SALE",
        items: [
        // If someone purchases more than one item, 
        // you can add those items to the items array
         {
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 9.99,
          quantity: 1
        }]
    });
    });
    this.condition = sessionStorage.getItem('condition')
    if (this.condition == 'false') {
      window.location.reload();
      sessionStorage.setItem('condition', 'true');
    }
  };

  ngOnInit(): void {
    sendConversion();
  }
}
