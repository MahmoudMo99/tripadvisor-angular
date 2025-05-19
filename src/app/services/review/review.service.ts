// review.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API } from '../../constants/api-urs';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IReview } from '../../models/review/review';
import { TokenService } from '../auth/token.service';

interface IReviews {
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
@Injectable({
  providedIn: 'root',
})
export class ReviewService {


  private token = inject(TokenService).getToken();

  userReviews = new BehaviorSubject<IReview[]>([]);

  constructor(private http: HttpClient) {
    this.getCurrentUserReviews();
  }

  getReviews(type: string, reference: string): Observable<{ totalRate: number, reviews: IReviews[] }> {

    return this.http.get<{ totalRate: number, reviews: IReviews[] }>(API.review.getReviews(type,reference));
  }
  getCurrentUserReviews() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );

    this.http.get<IReview[]>(API.review.getCurrentUserReviews, { headers }).subscribe((res) => {

      this.userReviews.next(res);
    });
  }
  addReview(type: string, reference: string, data: any) {
    console.log('lol=>2');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(API.review.addReview(type, reference), data, { headers });
  }
}
