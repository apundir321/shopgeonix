import { Component, OnInit, Input } from '@angular/core';

import { trendySlider } from '../data';

@Component({
  selector: 'molla-trendy-collection',
  templateUrl: './trendy-collection.component.html',
  styleUrls: ['./trendy-collection.component.scss']
})
export class TrendyCollectionComponent implements OnInit {

  @Input() products : any;
  @Input() loaded = false;

  categories = [['HDD – Hard Disk Drive'], ['Laptop RAM'], ['Geonix SSD'], ['Laptop HDD']];
  titles = ['All', 'Accessories', 'Cameras & Camcorders', 'Computers & Tablets', 'Entertainment']
	sliderOption = trendySlider;

  constructor() { }

  ngOnInit(): void {
  }

}
