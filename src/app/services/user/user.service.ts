import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../../models/user/i-user';
import { API } from '../../constants/api-urs';
import { IEditUser } from '../../models/user/i-edit-user';
import { TokenService } from '../auth/token.service';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: string | null = inject(TokenService).getToken();
  showEditModelFlag = new BehaviorSubject<boolean>(false);
  showEditImageModelFlag = new BehaviorSubject<boolean>(false);
  showEditImageModelType = new BehaviorSubject<string>('image');
  currentUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({
    name: '',
    username: '',
  });

  constructor(private http: HttpClient) {}
  getCurrentUser(): Observable<IUser> {
    return this.http.get<IUser>(API.user.getCurrentUser, {
      withCredentials: true,
    });
  }
  editProfile(user: IEditUser | FormData): Observable<IUser> {
    return this.http.patch<IUser>(API.user.getCurrentUser, user, {
      withCredentials: true,
    });
  }
}
