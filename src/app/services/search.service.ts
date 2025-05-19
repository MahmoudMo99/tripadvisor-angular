import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../constants/api-urs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  searchPlaces(searchValue: string, limit: number, page: number, type: string | undefined): Observable<any> {
    console.log(type);
    return this.http.get<any>(API.search.searchforPlace(searchValue, limit, page, type));
  }
}
