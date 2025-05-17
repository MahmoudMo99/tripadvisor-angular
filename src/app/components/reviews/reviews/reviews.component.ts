import { Component } from '@angular/core';
import { ReviewRateComponent } from "../review-form/review-rate/review-rate.component";
import { ReviewCardComponent } from './review-card/review-card.component';
import { ReviewProgressbarComponent } from "./review-progressbar/review-progressbar.component";


@Component({
  selector: 'app-reviews',
  imports: [ReviewRateComponent, ReviewCardComponent, ReviewProgressbarComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

}
