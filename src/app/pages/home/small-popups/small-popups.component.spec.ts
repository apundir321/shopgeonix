import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPopupsComponent } from './small-popups.component';

describe('SmallPopupsComponent', () => {
  let component: SmallPopupsComponent;
  let fixture: ComponentFixture<SmallPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallPopupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
