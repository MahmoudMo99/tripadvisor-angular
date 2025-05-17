// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class FlightService {
//   private apiUrl = 'http://localhost:3000/api';
//   private flightUrl = `${this.apiUrl}/flights`;
//     private httpHeaders = new HttpHeaders({
//     'Content-Type': 'application/json',
//   });
// selectedFlight: any;
//   constructor(private http: HttpClient) {}
//  searchFlights(query: any): Observable<any> {
//     return this.http.get(`${this.flightUrl}/filter`, {
//       params: query,
//       headers: this.httpHeaders,
//     });
//   }

//   getFlightById(_id: string): Observable<any> {
//     if (!_id) {
//       throw new Error('Flight ID is required');
//     }
//     return this.http.get(`${this.flightUrl}/${_id}`, {
//       headers: this.httpHeaders,
//     });
//   }
 

//     checkAvailability(flightId: string, query: any): Observable<any> {
//     return this.http.get(`${this.flightUrl}/check-availability/${flightId}`, {
//       params: query,
//       headers: this.httpHeaders,
//     });
//   }
// setSelectedFlight(flight: any): void {
//   this.selectedFlight = flight;
// } getSelectedFlight(): any {
//   return this.selectedFlight;
// }

//   clearSelectedFlight(): void {
//     this.selectedFlight = null;
//   }
// }import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private selectedFlight: any;
  private searchQuery: any; 

  constructor(private http: HttpClient) {}

  setSearchQuery(query: any): void {
    this.searchQuery = query;
  }

  getSearchQuery(): any {
    return this.searchQuery;
  }

  clearSearchQuery(): void {
    this.searchQuery = null;
  }

  searchFlights(query: any): Observable<any> {
    const params = {
      originId: query.originId || '',
      destId: query.destId || '',   
      airline: query.airline || undefined,
      tripType: query.tripType || 'roundTrip',
    };
    return this.http.get(`${this.flightUrl}/filter`, {
      params: params,
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

  checkAvailability(flightId: string, query: any): Observable<any> {
    return this.http.get(`${this.flightUrl}/check-availability/${flightId}`, {
      params: query,
      headers: this.httpHeaders,
    });
  }

  setSelectedFlight(flight: any): void {
    this.selectedFlight = flight;
  }

  getSelectedFlight(): any {
    return this.selectedFlight;
  }

  clearSelectedFlight(): void {
    this.selectedFlight = null;
  
  }
}