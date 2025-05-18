import { Component, EventEmitter, Input, Output ,OnChanges, SimpleChanges} from '@angular/core';
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

  constructor( ){

  }
 
  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }

  @Output() ratingChange = new EventEmitter<number>();
  

  onRate(){
    this.ratingChange.emit(this.rating);
  }
}
