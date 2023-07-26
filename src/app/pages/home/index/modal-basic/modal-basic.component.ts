import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
  } from '@angular/core';
  import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
  import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';

@Component({
  selector: 'molla-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.scss'],
})
export class ModalBasicComponent implements OnInit {
	// @ViewChild(NgxWheelComponent, { static: false }) wheel;

	arrayvalue:any = [
		254, 45, 212, 365, 2543
	  ]
	  newval:any;

	  @ViewChild(NgxWheelComponent, { static: false }) wheel;

	  seed = [...Array(12).keys()];
	  idToLandOn: any;
	  items: any[];
	  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
	  textAlignment: TextAlignment = TextAlignment.OUTER;

	title = 'molla-modal-basic';
	showmodal:any = true
	@ViewChild('content') content: ElementRef | undefined;

	closeResult = '';
  
	constructor(private modalService: NgbModal) {}
	ngAfterViewInit(): void { 
	  this.open(this.content);
	}
	ngOnInit(): void {
		this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
		const colors = ["#FF0000", "#000000"];
		this.items = this.seed.map((value) => ({
		  fillStyle: colors[value % 2],
		  text: `Prize ${value}`,
		  id: value,
		  textFillStyle: "white",
		  textFontSize: "16"
		}));
		this.newvalues();
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
  
	reset() {
	  this.wheel.reset();
	}
	before() {
	  alert("Your wheel is about to spin");
	}
  
	async spin(prize) {
	  this.idToLandOn = prize;
	  await new Promise((resolve) => setTimeout(resolve, 0));
	  this.wheel.spin();
	}
  
	after() {
	  alert("You have been bamboozled");
	}

}
