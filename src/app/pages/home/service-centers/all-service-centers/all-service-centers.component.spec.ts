import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServiceCentersComponent } from './all-service-centers.component';

describe('AllServiceCentersComponent', () => {
  let component: AllServiceCentersComponent;
  let fixture: ComponentFixture<AllServiceCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllServiceCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllServiceCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
