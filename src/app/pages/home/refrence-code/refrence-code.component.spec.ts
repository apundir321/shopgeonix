import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrenceCodeComponent } from './refrence-code.component';

describe('RefrenceCodeComponent', () => {
  let component: RefrenceCodeComponent;
  let fixture: ComponentFixture<RefrenceCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrenceCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrenceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
