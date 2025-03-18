import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityServiceService {
  private activityDataSubject = new BehaviorSubject<any>(null);

  constructor() {}

  setActivityData(data: any) {
    this.activityDataSubject.next(data);
  }

  getActivityData$(): Observable<any> {
    return this.activityDataSubject.asObservable();
  }

  hasRequiredActivityData(): boolean {
    const data = this.activityDataSubject.getValue();
    return data && data.pickupLocation && data.tourLanguage;
  }
}
