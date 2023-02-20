import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'molla-page-header',
	templateUrl: './page-header.component.html',
	styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent implements OnInit {

	@Input() containerClass = "container";
	@Input() image = 'https://www.geonix.in/assets/images/banner/HOME_PAGE.jpg';
	@Input() subtitle: string;
	@Input() title: string;

	constructor() { }

	ngOnInit(): void {
	}
}
