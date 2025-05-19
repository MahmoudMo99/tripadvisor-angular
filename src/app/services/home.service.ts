import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { auth ,API} from '../constants/api-urs';
import {ICards} from '../models/attractions/i-cards'
import {Restaurant} from '../models/restaurants/restaurant'
import {IDestination} from '../models/Destination/idestination'
import {ItripFetch} from '../models/Trips/itrip-fetch'
import {Hotel} from '../models/hotels/Hotel'
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
  // getDestination(): Observable<any[]> {
  //   return this.http.get<any[]>(auth.destinationHome);
  // }

  // gettrip(): Observable<any[]> {
  //   return this.http.get<any[]>(API.trips.getMyTrips);
  // }


  // getCreatorTravel(): Observable<any[]> {
  //   return this.http.get<any[]>(auth.travelCreator);
  // }



  getAttractions(): Observable<ICards[]> {
  return this.http.get<ICards[]>(API.attractives.getAll);
}



getRestaurants(): Observable<Restaurant[]> {
  return this.http.get<Restaurant[]>(API.restaurant.recentlyrestaurants);
}


getTrip(): Observable<any[]> {
  return this.http.get<any[]>(API.trips.getMyTrips);
}

 getDestination(): Observable<ItripFetch[]> {
    return this.http.get<ItripFetch[]>(API.destination.getAll);
  }



  getHotels(): Observable<Hotel[]>  {
  return this.http.get<Hotel[]>(API.hotels.getAll);
}
}




