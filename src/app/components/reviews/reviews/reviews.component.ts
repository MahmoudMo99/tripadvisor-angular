import { Component, Input } from '@angular/core';
import { ReviewRateComponent } from "../review-form/review-rate/review-rate.component";
import { ReviewCardComponent } from './review-card/review-card.component';
import { ReviewProgressbarComponent } from "./review-progressbar/review-progressbar.component";
import { RouterLink } from '@angular/router';
import { ReviewService } from '../../../services/review/review.service';


@Component({
  selector: 'app-reviews',
  imports: [ReviewRateComponent, ReviewCardComponent, ReviewProgressbarComponent, RouterLink],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  @Input() type: string='';
  @Input() reference: string='';

//   review:{
// title:
//   }[]

  constructor(private reviewService:ReviewService){
  

  }
}
