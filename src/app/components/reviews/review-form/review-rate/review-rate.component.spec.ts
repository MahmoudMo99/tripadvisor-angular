import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRateComponent } from './review-rate.component';

describe('ReviewRateComponent', () => {
  let component: ReviewRateComponent;
  let fixture: ComponentFixture<ReviewRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
