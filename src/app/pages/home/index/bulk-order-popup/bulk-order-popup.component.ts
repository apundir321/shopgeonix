import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'molla-bulk-order-popup',
  templateUrl: './bulk-order-popup.component.html',
  styleUrls: ['./bulk-order-popup.component.scss']
})
export class BulkOrderPopupComponent implements OnInit {

  @ViewChild('popup', { static: true }) myElement: ElementRef;
  @ViewChild('popupoverlay', { static: true }) overlay: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.popupfunction()
  }

  popupfunction = () => {
    setTimeout(() => {
      this.myElement.nativeElement.style.transform = "scale(1)"
      this.overlay.nativeElement.style.display = "block"
      // console.log('this is element in popup', this.myElement.nativeElement, this.overlay.nativeElement);
    }, 10000);
  }

  closebutton = () => {
    this.myElement.nativeElement.style.transform = "scale(0)"
    this.overlay.nativeElement.style.display = "none"
  }
}
