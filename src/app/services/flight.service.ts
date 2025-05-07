import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'http://localhost:3000/api';
  private flightUrl = `${this.apiUrl}/flights`;
    private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  searchFlights(query: any): Observable<any> {
    return this.http.get(`${this.flightUrl}/filter`, {
      params: query,
      headers: this.httpHeaders,
    });
  }

  getFlightById(_id: string): Observable<any> {
    if (!_id) {
      throw new Error('Flight ID is required');
    }
    return this.http.get(`${this.flightUrl}/${_id}`, {
      headers: this.httpHeaders,
    });
  }

  addFlight(flightData: any): Observable<any> {
    return this.http.post(`${this.flightUrl}`, flightData, {
      headers: this.httpHeaders,
    });
  }

  deleteFlight(id: string): Observable<any> {
    return this.http.delete(`${this.flightUrl}/${id}`, {
      headers: this.httpHeaders,
    });
  }

  updateFlight(id: string, flightData: any): Observable<any> {
    return this.http.put(`${this.flightUrl}/${id}`, flightData, {
      headers: this.httpHeaders,
    });
  }

  checkAvailability(flightId: string, query: any): Observable<any> {
    return this.http.get(`${this.flightUrl}/check-availability/${flightId}`, {
      params: query,
      headers: this.httpHeaders,
    });
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FlightService {

//   constructor() { }
// }
