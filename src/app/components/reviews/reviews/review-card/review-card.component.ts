import { Component } from '@angular/core';
import { ReviewRateComponent } from "../../review-form/review-rate/review-rate.component";

@Component({
  selector: 'app-review-card',
  imports: [ReviewRateComponent],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {

}
