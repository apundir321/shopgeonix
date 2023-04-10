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
  styleUrls: ['./modal-basic.component.scss']
})
export class ModalBasicComponent implements OnInit {

	title = 'molla-modal-basic';
	showmodal:any = true
	@ViewChild('content') content: ElementRef | undefined;

	closeResult = '';
  
	constructor(private modalService: NgbModal) {}
	ngAfterViewInit(): void {
	  this.open(this.content);
	}
	ngOnInit(): void {}

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

}
