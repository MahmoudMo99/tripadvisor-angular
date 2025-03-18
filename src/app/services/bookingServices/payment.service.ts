import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
 
  // private apiUrl = 'https://localhost/bookings'; 

  // constructor(private http: HttpClient) {}

  // submitBooking(bookingData: any): Observable<any> {
  //   console.log(bookingData);
    
  //   return this.http.post<any>(this.apiUrl, bookingData);
  // }
}
