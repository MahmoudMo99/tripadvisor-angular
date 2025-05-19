import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewService } from '../../../services/review/review.service';
import { FlightService } from '../../../services/flight.service';
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

  constructor(
    private reviewService: ReviewService,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    this.loading = true;
    this.reviews = [];
    this.error = '';

    this.flightService.getAllFlightIds().subscribe({
      next: (flightIds: string[]) => {
        if (!flightIds || flightIds.length === 0) {
          this.error = 'No flights found to fetch reviews.';
          this.loading = false;
          return;
        }
        const requests = flightIds.map((flightId) =>
          this.reviewService.getFlightReviews('Flight')
        );
        forkJoin(requests).subscribe({
          next: (responses: any[]) => {
            const allReviews = responses.flatMap((response) => {
              if (Array.isArray(response)) {
                return response;
              } else if (response?.data && Array.isArray(response.data)) {
                return response.data;
              } else {
                return [];
              }
            });
            this.reviews = allReviews;
            if (this.reviews.length === 0) {
              this.error = 'No flight reviews available.';
            }
            this.loading = false;
          },
          error: (_error: any) => {
            this.error = 'Failed to load reviews for flights.';
            this.loading = false;
          },
        });
      },
      error: (_error: any) => {
        this.error = 'Failed to load flights to fetch reviews.';
        this.loading = false;
      },
    });
  }

  getRatingCircles(rating: number): { filled: boolean }[] {
    const ratingValue = rating || 0;
    return Array(5)
      .fill(0)
      .map((_, index) => ({
        filled: index < ratingValue,
      }));
  }

  onSearch(): void {
    if (!this.searchQuery.trim()) {
      this.loadReviews();
      return;
    }
    const searchTerm = this.searchQuery.toLowerCase();
    const filteredReviews = this.reviews.filter(
      (review) =>
        review.title?.toLowerCase().includes(searchTerm) ||
        review.description?.toLowerCase().includes(searchTerm) ||
        review.reviewflightText?.toLowerCase().includes(searchTerm)
    );
    this.reviews = filteredReviews;
  }
}
