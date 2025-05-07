// review.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = 'http://localhost:3000/api/reviews';

  private defaultToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2I5ZmJmMmY1YjhkNzc4OTUzOTFjYjQiLCJpYXQiOjE3NDIwOTY0NTl9.67xgRQENEP0VSOF3eh6ZC9XodwAeY-GKjQCMzKjd1BU';

  constructor(private http: HttpClient) {}

  getReviews(type: string, reference: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.defaultToken}`);

    return this.http.get(`${this.apiUrl}?type=${type}&reference=${reference}`, { headers });
  }
}


