import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecenterTryComponent } from './servicecenter-try.component';

describe('ServicecenterTryComponent', () => {
  let component: ServicecenterTryComponent;
  let fixture: ComponentFixture<ServicecenterTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecenterTryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecenterTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
