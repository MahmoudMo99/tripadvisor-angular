import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { API, withDomain } from '../../constants/api-urs'; // Import withDomain
import { IDestination } from '../../models/Destination/idestination';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private http: HttpClient) {}

  searchDestination(searchValue: string): Observable<IDestination[]> {
    return this.http.get<IDestination[]>(API.destination.search(searchValue));
  }

 getDestinationsByIds(ids: string[]): Observable<IDestination[]> {
  const requests = ids.map(id =>
    this.http.get<{ message: string, destination: IDestination }>(withDomain(`destination/${id}`))
      .pipe(
        map(res => res.destination)
      )
  );
  return forkJoin(requests);
}

}