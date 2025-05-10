import { Component } from '@angular/core';
import { ReviewService } from '../../../../services/review/review.service';
import { IReview } from '../../../../models/review/review';
import { ShowDatePipe } from '../../../../pipes/show-date.pipe';
import { ReviewRateComponent } from '../../../reviews/review-form/review-rate/review-rate.component';

@Component({
  selector: 'app-reviews',
  imports: [ShowDatePipe,ReviewRateComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews :IReview[]= [
  ]
  constructor(private reviewService: ReviewService) {
    this.getReviews();
  }

  getReviews() {
    this.reviewService.userReviews.subscribe(r=>{
      this.reviews = r;
      console.log(this.reviews);
    })
  }
  rate = 3.2
  Math = Math;
}
