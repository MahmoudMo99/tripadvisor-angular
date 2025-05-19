import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewProgressbarComponent } from './review-progressbar.component';

describe('ReviewProgressbarComponent', () => {
  let component: ReviewProgressbarComponent;
  let fixture: ComponentFixture<ReviewProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewProgressbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
