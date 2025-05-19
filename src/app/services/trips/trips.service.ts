import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itrip } from '../../models/Trips/itrip';
import { API } from '../../constants/api-urs';
import { ItripInviteRes } from '../../models/Trips/itrip-invite-res';
import { ItripShareRes } from '../../models/Trips/itrip-share-res';
import { ItripFetch } from '../../models/Trips/itrip-fetch';
import { environment } from '../../environment/environemt.dev';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  createTrip(tripData: Itrip): Observable<any> {
    // const token = localStorage.getItem('accessToken');
    // token here will update while auth is completeeeeeeeeeeeeeeeeee

    return this.http.post(API.trips.create, tripData);
  }

  getMyTrips(): Observable<any> {
    return this.http.get(API.trips.getMyTrips);
  }

  updateTripDate(tripId: string, date: string) {
    const url = API.trips.addDateToTrip(tripId);

    const body = { date };
    return this.http.patch(url, body);
  }

  inviteTrip(tripId: string) {
    const url = API.trips.invite(tripId);

    return this.http.get<ItripInviteRes>(url);
  }

  shareTrip(tripId: string) {
    const url = API.trips.share(tripId);

    return this.http.get<ItripShareRes>(url);
  }

  markTripAsComplete(tripId: string): Observable<{ trip: ItripFetch }> {
    return this.http.patch<{ trip: ItripFetch }>(
      API.trips.markComplete(tripId),
      {}
    );
  }

  deleteTrip(tripId: string): Observable<any> {
    return this.http.delete(API.trips.delete(tripId));
  }

  getTripById(tripId: string): Observable<any> {
    return this.http.get(API.trips.getTripById(tripId));
  }

  getSortedTrips(sortBy: string) {
    return this.http.get<any>(`${API.trips.getSortedTrips}?sortBy=${sortBy}`);
  }

  makeTripPublicAndUpdate(id: string, data: any) {
    return this.http.patch(API.trips.makePublic(id), data);
  }
}
