// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-flight-review',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
//   templateUrl: './flight-review.component.html',
//   styleUrls: ['./flight-review.component.scss']
// })
// export class FlightReviewComponent implements OnInit {
//   searchQuery: string = '';
//   reviews = [
//     {
//       airline: 'American Airlines',
//       rating: 4,
//       ratingcount: '81,691',
//       topRatedIn: 'Customer Service (e.g. attitude, care, helpfulness)',
//       reviewText: '“The flight left on time and service onboard was excellent.”'
//     },
//     {
//       airline: 'Delta Air Lines',
//       rating: 4,
//       ratingcount: '81,691',
//       topRatedIn: 'Inflight Entertainment',
//       reviewText: '“Delta Airlines was very relaxing, no delays, and great service.”'
//     },
//     {
//       airline: 'United Airlines',
//       rating: 3,
//       ratingcount: '81,691',
//       topRatedIn: 'Customer Service',
//       reviewText: '“Great experience, friendly flight attendants, and comfortable seating.”'
//     },
//     {
//       airline: 'JetBlue',
//       rating: 4,
//       ratingcount: '81,691',
//       topRatedIn: 'Legroom',
//       reviewText: '“Spacious legroom and smooth flight experience.”'
//     }
//   ];

//   ngOnInit(): void {
//     this.destinationreview();
//   }

//   destinationreview(): void {
//     console.log('Fetching reviews..');
//   }

//   onSearch(): void {
//     if (this.searchQuery.trim()) {
//       console.log('Searching for:', this.searchQuery);
//     }
//   }

//   getRatingStars(rating: number): string {
//     return '★'.repeat(rating) + '☆'.repeat(5 - rating);
//   }
// }



// flight-review.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewService } from '../../../services/review.service';

@Component({
  selector: 'app-flight-review',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './flight-review.component.html',
  styleUrls: ['./flight-review.component.scss'],
})
export class FlightReviewComponent implements OnInit {
  searchQuery: string = '';
  reviews: any[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    const type = 'Flight';
    const reference = ''; 

    this.loadReviews(type, reference);
  }

  loadReviews(type: string, reference: string): void {
    this.reviewService.getReviews(type, reference).subscribe(
      (data: any) => {
        console.log('Fetched reviews:', data);

        this.reviews = data
          .filter((review: any) => review.type === 'Flight')
          .map((review: any) => ({
            airline: review.title,
            user:{
              image: review.user?.profileImage || 'assets/tonit1079.jpg',
            },
            rating: review.rating,
            ratingcount: review.ratingcount||"0", 
            topRatedIn: review.topRatedIn ||'Flights', 
            reviewText: review.description, 
          }));
      },
      (error) => {
        console.error('Error fetching reviews', error);
      }
    );
  }

  getRatingStars(rating: number): string {
    const fullStars = '★'.repeat(Math.floor(rating));
    const emptyStars = '☆'.repeat(5 - Math.floor(rating));
    return fullStars + emptyStars;
  }

  onSearch(): void {
    if (!this.searchQuery.trim()) return;
    
    const searchTerm = this.searchQuery.toLowerCase();
    const filteredReviews = this.reviews.filter(review => 
      review.title.toLowerCase().includes(searchTerm) ||
      review.description.toLowerCase().includes(searchTerm)
    );
    
    console.log('Search results:', filteredReviews);
  }
}