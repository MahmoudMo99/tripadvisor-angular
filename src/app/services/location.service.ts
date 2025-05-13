import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {API} from '../constants/api-urs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

   
   searchCity(city: string, limit: number = 10, page: number = 1) {
    return this.http.get(`${API.location.searchforlocation(city, limit, page)}`);
  }
}
