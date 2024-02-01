import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter, first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { StoreService } from './core/store/store.service';
import { UtilsService } from './shared/services/utils.service';
import { RefreshStoreAction } from 'src/app/core/actions/actions';
import { environment } from 'src/environments/environment';
import { CustomPopupComponent } from './shared/components/custom-popup/custom-popup.component';
import { WindowCloseService } from './shared/services/window-close.service';

declare var $: any;

@Component({
	selector: 'molla-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {

	// @HostListener('window:beforeunload', ['$event'])
	// unloadNotification($event: any): void {
	//   $event.returnValue = true;
	//   window.alert('Are you sure you want to leave?')
	//   console.log($event.returnValue)
	// }

	ngOnInit() {
		this.windowCloseService.getWindowCloseObservable().subscribe(() => {
		  // Open the custom popup when the window close event occurs
		  console.log('on close function is working')
		  this.modalService.open(CustomPopupComponent, { centered: true });
		});
	  }

	constructor(
		public store: Store<any>,
		public router: Router,
		public viewPort: ViewportScroller,
		public storeService: StoreService,
		public utilsService: UtilsService,
		public modalService: NgbModal,
		private windowCloseService: WindowCloseService
	) {
		const navigationEnd = this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		);
			
		navigationEnd.pipe(first()).subscribe(() => {
			document.querySelector('body')?.classList.add('loaded');
			var timer = setInterval(() => {
				if( window.getComputedStyle( document.querySelector('body') ).visibility == 'visible') {
					clearInterval(timer);
					$('.owl-carousel').trigger('refresh.owl.carousel');
				}
			}, 300);
		});

		navigationEnd.subscribe((event: any) => {
			if (!event.url.includes('/shop/sidebar') && !event.url.includes('/shop/nosidebar') && !event.url.includes('/shop/market') && !event.url.includes('/blog')) {
				this.viewPort.scrollToPosition([0, 0]);
			}

			document.getElementsByTagName('molla-header')[0].scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			  });


			this.modalService.dismissAll();
		})

		if (localStorage.getItem("molla-angular-demo") !== environment.demo) {
			this.store.dispatch(new RefreshStoreAction());
		}

		localStorage.setItem("molla-angular-demo", environment.demo);
	}


	@HostListener('window: scroll', ['$event'])
	onWindowScroll(e: Event) {
		this.utilsService.setStickyHeader();
	}

	hideMobileMenu() {
		document.querySelector('body').classList.remove('mmenu-active');
		document.querySelector('html').style.overflowX = 'unset';
	}
}