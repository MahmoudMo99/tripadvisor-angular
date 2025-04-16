import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review-rate',
  imports: [NgbRatingModule],
  templateUrl: './review-rate.component.html',
  styleUrl: './review-rate.component.scss'
})
export class ReviewRateComponent {
	@Input() rating = 0;
  @Input() readonly = false;

	ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
}
