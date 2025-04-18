import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../constants/api-urs';
import { Restaurant } from '../models/restaurants/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRecentlyRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(API.restaurant.recentlyrestaurants);
  }

  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(API.restaurant.getById(id));
  }
}
