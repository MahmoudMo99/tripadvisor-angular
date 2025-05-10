import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../constants/api-urs';
import { Ibooking } from '../../models/bookings/ibooking';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  submitBooking(bookingData: Ibooking): Observable<any> {
    // const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0`,
    };

    return this.http.post<any>(API.booking.create, bookingData, { headers });
  }
}
