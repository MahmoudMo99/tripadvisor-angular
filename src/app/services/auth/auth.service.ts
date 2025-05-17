import { Injectable } from '@angular/core';
import { IRegisterRequest } from '../../models/auth/i-register-request';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IIdResponse } from '../../models/base/i-id-response';
import { HttpClient } from '@angular/common/http';
import { API } from '../../constants/api-urs';
import { ILoginRequest } from '../../models/auth/i-login-request';
import { TokenService } from './token.service';
import { ILoginResponse } from '../../models/auth/i-login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {
    const token = this.tokenService.getToken();
    const isLoggedIn = token !== null && this.tokenService.isTokenValid(token);
    this._isLoggedIn$.next(isLoggedIn);
  }

  get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  get currentToken(): string | null {
    return this.tokenService.getToken();
  }

  register(request: IRegisterRequest): Observable<IIdResponse> {
    return this.httpClient.post<IIdResponse>(API.auth.register, request);
  }

  login(request: ILoginRequest): Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(API.auth.login, request).pipe(
      tap((res) => {
        this.tokenService.saveToken(res.token);
        this._isLoggedIn$.next(true);
      })
    );
  }
  logout(): void {
    this.tokenService.deleteCurrentToken();
    this._isLoggedIn$.next(false);
    this.router.navigate(['/options']);
  }

  isAuthenticated(): boolean {
    const token = this.currentToken;
    return token !== null && this.tokenService.isTokenValid(token);
  }
}
