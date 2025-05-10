// review.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {API} from '../../constants/api-urs';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IReview } from '../../models/review/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
 

  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2I5ZmJmMmY1YjhkNzc4OTUzOTFjYjQiLCJpYXQiOjE3NDIwOTY0NTl9.67xgRQENEP0VSOF3eh6ZC9XodwAeY-GKjQCMzKjd1BU';
  userReviews = new BehaviorSubject<IReview[]>([]);

  constructor(private http: HttpClient) {
    this.getCurrentUserReviews();
  }

  getReviews(type: string, reference: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.get(API.review.getReviews(type,reference), { headers });
  }
  getCurrentUserReviews() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

     this.http.get<IReview[]>(API.review.getCurrentUserReviews, { headers }).subscribe((res) => {
      
         this.userReviews.next(res);
     });

  }
}