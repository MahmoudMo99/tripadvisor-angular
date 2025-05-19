import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../constants/api-urs';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IReview } from '../../models/review/review';

interface IReviews {
  title: string;
  description: string;
  photos?: string[];
  when: Date;
  rating: number;
  user: {
    firstName: string;
    lastName: string;
    image?: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  userReviews = new BehaviorSubject<IReview[]>([]);

  constructor(private http: HttpClient) {
    this.getCurrentUserReviews();
  }

  getReviews(
    type: string,
    reference: string
  ): Observable<{ totalRate: number; reviews: IReviews[] }> {
    return this.http.get<{ totalRate: number; reviews: IReviews[] }>(
      API.review.getReviews(type, reference)
    );
  }
  getCurrentUserReviews() {
    this.http
      .get<IReview[]>(API.review.getCurrentUserReviews)
      .subscribe((res) => {
        this.userReviews.next(res);
      });
  }

  addReview(type: string, reference: string, data: any) {
    return this.http.post<any>(API.review.addReview(type, reference), data);
  }

  getFlightReviews(type: string = 'Flight') {
    {
      return this.http.get(API.review.getFlightReviews(type));
    }
  }
}
