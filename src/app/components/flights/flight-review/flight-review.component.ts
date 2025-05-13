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
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewService } from '../../../services/review/review.service';
import { forkJoin } from 'rxjs';

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
  loading: boolean = false;
  error: string | null = null;
  
  // Array of flight IDs to fetch reviews for
  flightIds: string[] = [
    '67b9ec98a6257e7737703105',
    '67b9edac53c8085da0b9e51a',
    '6819324615a40966c33f4360',
    '681da89aa8d66424653433b6'
  ];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

loadReviews() {
  this.loading = true;
  this.reviews = [];
  this.error = '';

  const requests = this.flightIds.map(flightId => {
    console.log(`Fetching reviews for flight ID: ${flightId}`);
    return this.reviewService.getReviews('Flight', flightId);
  });

  forkJoin(requests).subscribe({
    next: (responses: any[]) => {
      console.log('All API responses:', responses);

      const allReviews = responses.flatMap(response => {
        if (response?.data && Array.isArray(response.data)) {
          return response.data;
        } else {
          console.warn('Invalid response format:', response);
          return [];
        }
      });

      this.reviews = allReviews;

      if (this.reviews.length === 0) {
        console.log('No flight reviews found');
        this.error = 'No flight reviews available';
      } else {
        console.log('Total flight reviews:', this.reviews);
      }

      this.loading = false;
    },
    error: (error) => {
      console.error('Error fetching reviews:', error);
      this.error = `Failed to load reviews: ${error.message}`;
      this.loading = false;
    }
  });
}

 
  getRatingCircles(rating: number): { filled: boolean }[] {
    const ratingValue = rating || 0;
    return Array(5).fill(0).map((_, index) => ({
      filled: index < ratingValue
    }));
  }

  onSearch(): void {
    if (!this.searchQuery.trim()) {
      this.loadReviews();
      return;
    }
    
    const searchTerm = this.searchQuery.toLowerCase();
    const filteredReviews = this.reviews.filter(review => 
      (review.title?.toLowerCase().includes(searchTerm) ||
      review.description?.toLowerCase().includes(searchTerm) ||
      review.reviewflightText?.toLowerCase().includes(searchTerm)
    ));
    
    this.reviews = filteredReviews;
    console.log('Search results:', filteredReviews);
  }
}