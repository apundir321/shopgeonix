import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmQueriesComponent } from './asm-queries.component';

describe('AsmQueriesComponent', () => {
  let component: AsmQueriesComponent;
  let fixture: ComponentFixture<AsmQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsmQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
