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
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0`
    );
    return this.http.post(API.trips.create, tripData, { headers });
  }

  getMyTrips(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0`
    );
    return this.http.get(API.trips.getMyTrips, { headers });
  }




  updateTripDate(tripId: string, date: string) {
  const url = API.trips.addDateToTrip(tripId);
  const headers = new HttpHeaders().set(
    'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0 `
  );
  const body = { date };
  return this.http.patch(url, body, { headers });
}

  inviteTrip(tripId: string) {
    const url = API.trips.invite(tripId);
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0 `
    );
    return this.http.get<ItripInviteRes>(url, { headers });
  }


  shareTrip(tripId: string) {
    const url = API.trips.share(tripId);
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0 `
    );
    return this.http.get<ItripShareRes>(url, { headers });
  }

markTripAsComplete(tripId: string): Observable<{ trip: ItripFetch }> {
  const headers = new HttpHeaders().set(
    'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0 `
  );
  return this.http.patch<{ trip: ItripFetch }>(
    API.trips.markComplete(tripId),
    {},
    { headers }
  );
}


deleteTrip(tripId: string): Observable<any> {
  const headers = new HttpHeaders().set(
    'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0 `
  );
return this.http.delete(API.trips.delete(tripId), { headers });
  
}


    getTripById(tripId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0`
    );
    return this.http.get(API.trips.getTripById(tripId), { headers });
  }



  getSortedTrips(sortBy: string) {
  const headers = new HttpHeaders().set(
    'Authorization',
          `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0`

  );
  return this.http.get<any>(`${API.trips.getSortedTrips}?sortBy=${sortBy}`, { headers });
}

makeTripPublicAndUpdate(id: string, data: any) {
  const headers = new HttpHeaders().set(
    'Authorization',
          `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAxMDYxMzdmOWViZjJmODlhZmJjY2IiLCJpYXQiOjE3NDQ4OTc1NzZ9.DIe5NuzhAw2uGH9XqM-E0NxKTj-LUwTnlTvm8himsh0`
  );

  return this.http.put(API.trips.makePublic(id), data, { headers });
}


}

