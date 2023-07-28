import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
  } from '@angular/core';
  import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'molla-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.scss'],
})
export class ModalBasicComponent implements OnInit {

	arrayvalue:any = [
		254, 45, 212, 365, 2543
	  ]
	  newval:any;
	  isModalOpened = false;


	title = 'molla-modal-basic';
	showmodal:any = true
	@ViewChild('content') content: ElementRef | undefined;

	closeResult = '';
  
	constructor(private modalService: NgbModal, private elementRef: ElementRef) {}
	ngAfterViewInit(): void { 
		const modalOpenedBefore = localStorage.getItem('modalOpened');
		if (!modalOpenedBefore) {
		  this.open(this.content);
		  localStorage.setItem('modalOpened', 'true');
		}
	}
	ngOnInit(): void {
	}

	open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'sm' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop'; 
		} else {
			return `with: ${reason}`;
		}
	}

	newvalues () {
		this.newval = this.arrayvalue[Math.floor(Math.random()*this.arrayvalue.length)];
		console.log('console random values of an array', this.newval);
	  }

	// items = [
	// 	{id:1, text: "prize 1"},
	// 	{id:2, text: "prize 2"},
	// 	{id:3, text: "prize 3"},
	// 	{id:4, text: "prize 4"},
	// 	{id:5, text: "prize 5"},
	// 	{id:6, text: "prize 6"},
	// 	{id:7, text: "prize 7"},
	// 	{id:8, text: "prize 8"},
	// ]

	// after() {
	// 	console.log('console after is here')
	// }

	// before() {
	// 	console.log('console before is here')
	// } 
	// ngAfterViewInit() {
	//    console.log('only after THIS EVENT "wheel" is usable!!');
	//    this.wheel.spin();
	// }
  
	// reset(){
	//    this.wheel.reset();
	// }
}
