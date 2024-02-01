import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrderPopupComponent } from './bulk-order-popup.component';

describe('BulkOrderPopupComponent', () => {
  let component: BulkOrderPopupComponent;
  let fixture: ComponentFixture<BulkOrderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkOrderPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
