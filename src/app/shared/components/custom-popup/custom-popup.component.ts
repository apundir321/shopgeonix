import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WindowCloseService } from '../../services/window-close.service';

@Component({
  selector: 'app-custom-popup',
  template: `
    <div class="custom-popup">
      <!-- Your custom popup content, including container, image, and close button -->
      <img src="your-image-url.jpg" alt="Your Image">
      <p>Your container content</p>
      <button (click)="closePopup()">Close</button>
    </div>
  `,
})
export class CustomPopupComponent {
  constructor(private activeModal: NgbActiveModal, private windowCloseService: WindowCloseService) {}

  closePopup(): void {
    this.activeModal.close();
    // Optionally, trigger window close event
    this.windowCloseService.triggerWindowCloseEvent();
  }
}