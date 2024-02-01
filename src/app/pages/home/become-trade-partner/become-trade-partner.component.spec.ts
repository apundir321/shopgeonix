import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeTradePartnerComponent } from './become-trade-partner.component';

describe('BecomeTradePartnerComponent', () => {
  let component: BecomeTradePartnerComponent;
  let fixture: ComponentFixture<BecomeTradePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeTradePartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeTradePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
