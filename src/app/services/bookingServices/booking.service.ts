import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookingDataSubject = new BehaviorSubject<any>(null);
  constructor() {}

  setBookingData(data: any) {
    this.bookingDataSubject.next(data);
  }

  // getBookingData() {
  //   return this.bookingDataSubject.getValue();
  // }

  getBookingData$(): Observable<any> {
    return this.bookingDataSubject.asObservable();
  }

  hasRequiredData(): boolean {
    const data = this.bookingDataSubject.getValue();
    return (
      data && data.firstName && data.lastName && data.email && data.phoneNumber
    );
  }
}
