import { Injectable } from '@angular/core';
import { IRegisterRequest } from '../../models/auth/i-register-request';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IIdResponse } from '../../models/base/i-id-response';
import { HttpClient } from '@angular/common/http';
import { API } from '../../constants/api-urs';
import { ILoginRequest } from '../../models/auth/i-login-request';
import { TokenService } from './token.service';
import { ILoginResponse } from '../../models/auth/i-login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  // private _isLoggedIn$ = new BehaviorSubject<boolean>(this.isAuthenticated());

  // get isLoggedIn$() {
  //   return this._isLoggedIn$.asObservable();
  // }

  register(request: IRegisterRequest): Observable<IIdResponse> {
    return this.httpClient.post<IIdResponse>(API.auth.register, request);
  }
  login(request: ILoginRequest): Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(API.auth.login, request).pipe(
      tap((res) => {
        this.tokenService.saveToken(res.token);
        // this.updateLoggedInStatus(true);
      })
    );
  }

  // get currentToken() {
  //   return this.tokenService.getToken();
  // }

  // isAuthenticated(): boolean {
  //   return (!!this.currentToken && this.tokenService.isTokenValid(this.currentToken));
  // }
}
