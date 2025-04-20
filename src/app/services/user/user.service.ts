import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../../models/user/i-user';
import { API } from '../../constants/api-urs';
import { IEditUser } from '../../models/user/i-edit-user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string | null =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODAwOWY5NmFhMzYwMGEwYTE0NmU0ODkiLCJpYXQiOjE3NDQ4NzI3ODJ9.WC_jomYNYiq_xwdiWFDUS-wCT2PcZJIFwmWRgeGDkXk";
  

  constructor(private http: HttpClient) {
    // Initialize the user service here if needed
  }
  getCurrentUser(): Observable<IUser> {
    return this.http.get<IUser>(API.user.getCurrentUser, {
      withCredentials: true,
      headers: {
        'authorization': `Bearer ${this.token}` // Include the token in the headers if needed
      }
    });
  }
  editProfile(user: IEditUser|FormData): Observable<IUser> {
    return this.http.patch<IUser>(API.user.getCurrentUser, user, {
      withCredentials: true,
      headers: {
        'authorization': `Bearer ${this.token}` // Include the token in the headers if needed
      }
    });
  }
}
