import { Component, Input, OnInit } from '@angular/core';
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
export class ReviewsComponent implements OnInit {
  @Input() type='' ;
  @Input() reference='' ;

  reviews: IReviews[] = [];

  constructor(private reviewService: ReviewService) {
  }
  ngOnInit(): void {
    console.log('test ======>',this.type,this.reference);
    this.getReviews();

  }
  
  getReviews(){
    this.reviewService.getReviews(this.type,this.reference).subscribe(res=>{
      this.reviews = res;
      console.log('reviews=> ',this.reviews)
    })
  }
}


interface IReviews {
  title: string,
  description: string,
  photos?: string[],
  when: Date,
  user: {
    firstName: string;
    lastName: string;
    image?: string;
  }
}