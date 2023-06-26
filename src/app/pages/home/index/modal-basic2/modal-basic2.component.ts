import { Component, OnInit } from '@angular/core';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'molla-modal-basic2',
  templateUrl: './modal-basic2.component.html',
  styleUrls: ['./modal-basic2.component.scss']
})
export class ModalBasic2Component implements OnInit {

  ngOnInit(): void {}
	closeResult = '';

	constructor(private modalService: NgbModal) {}

	open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic2-title', centered: true }).result.then(
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
