import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/shared/services/api.service';
import { MasterService } from 'src/app/shared/services/master.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { environment } from 'src/environments/environment';

@Component({
	selector: 'molla-header-search',
	templateUrl: './header-search.component.html',
	styleUrls: ['./header-search.component.scss']
})

export class HeaderSearchComponent implements OnInit, OnDestroy {

	products = [];
	searchTerm = "";
	cat = null;
	suggestions = [];
	timer: any;
	SERVER_URL = environment.SERVER_URL;

	constructor(public activeRoute: ActivatedRoute, public router: Router, public utilsService: UtilsService, public apiService: ApiService, public masterService: MasterService) {
	}

	ngOnInit(): void {
		document.querySelector('body').addEventListener('click', this.closeSearchForm);
	}

	ngOnDestroy(): void {
		document.querySelector('body').removeEventListener('click', this.closeSearchForm);
	}

	searchProducts(event: any) {
		this.searchTerm = event.target.value;
		if (this.searchTerm.length > 2) {
			if (this.timer) {
				window.clearTimeout(this.timer);
			}
			let data = {};
			data['key'] = this.searchTerm;
			this.timer = setTimeout(() => {
				this.masterService.fetchHeaderSearchData(this.searchTerm,data).subscribe(result => {
					console.log(result);
					this.suggestions = result;
					this.products = result;

				})
			}, 500)
		} else {
			window.clearTimeout(this.timer);
			this.suggestions = [];
		}
	}

	matchEmphasize(name: string) {
		var regExp = new RegExp(this.searchTerm, 'i');
		return name.replace(
			regExp,
			match => '<strong>' + match + '</strong>'
		);
	}

	goProductPage() {
		this.searchTerm = '';
		this.suggestions = [];
		var inputElement: any = document.querySelector('.header-search .form-control');
		inputElement.value = "";
		this.closeSearchForm();
	}

	onSearchToggle(e: Event) {
		e.stopPropagation();
		document
			.querySelector('.search-toggle')
			.classList.toggle('active');
		document
			.querySelector('.header-search-wrapper')
			.classList.toggle('show');
	}

	showSearchForm(e: Event) {
		document
			.querySelector('.header-search')
			.classList.add('show');
		e.stopPropagation();
	}

	closeSearchForm() {
		document
			.querySelector('.header-search')
			.classList.remove('show');
	}

	submitSearchForm(e: Event) {
		e.preventDefault();
		this.router.navigate(['/shop/sidebar/list'], { queryParams: { searchTerm: this.searchTerm } });
	}
}