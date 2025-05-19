import { Component, Input } from '@angular/core';
import { ReviewRateComponent } from "../../review-form/review-rate/review-rate.component";
import { ShowDatePipe } from '../../../../pipes/show-date.pipe';

@Component({
  selector: 'app-review-card',
  imports: [ReviewRateComponent,ShowDatePipe],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {
  @Input() review!: {
    title: string,
    description: string,
    photos?: string[],
    when: Date,
    rating:number,
    user: {
      firstName: string;
      lastName: string;
      image?: string;
    }
  }

}
