import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBasic2Component } from './modal-basic2.component';

describe('ModalBasic2Component', () => {
  let component: ModalBasic2Component;
  let fixture: ComponentFixture<ModalBasic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBasic2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBasic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
