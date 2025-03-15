import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { auth } from '../constants/api-urs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {


  }
  // getTrendData(): Observable<any[]> {
  //   return this.http.get<any[]>(auth.trends);
  // }

  getTravelCreators(): Observable<any[]> {
    return this.http.get<any[]>(auth.attractiveHome);
  }
  getDestination(): Observable<any[]> {
    return this.http.get<any[]>(auth.destinationHome);
  }

  // getCreatorTravel(): Observable<any[]> {
  //   return this.http.get<any[]>(auth.travelCreator);
  // }
}
