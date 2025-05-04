import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../constants/api-urs';
import { IDestination } from '../../models/Destination/idestination';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private http: HttpClient) {}

  searchDestination(searchValue: string): Observable<IDestination[]> {
    return this.http.get<IDestination[]>(API.destination.search(searchValue));
  }
}
