import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItripFetch } from '../../models/Trips/itrip-fetch'; 

@Injectable({
  providedIn: 'root'
})
export class TripSharedService {
  private tripDataSource = new BehaviorSubject<ItripFetch | null>(null);
  tripData$ = this.tripDataSource.asObservable();

  setTripData(tripData: ItripFetch) {
    this.tripDataSource.next(tripData);
  }
}
