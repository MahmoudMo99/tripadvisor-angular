import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private jwtHelper = new JwtHelperService();

  constructor() {}

  private readonly TOKEN_KEY = 'token';

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // getToken(): string | null {
  //   return localStorage.getItem(this.TOKEN_KEY);
  // }

  deleteCurrentToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }

  isTokenValid(token: string): boolean {
    return this.canDecodeToken(token) && !this.isTokenExpired(token);
  }

  canDecodeToken(token: string): boolean {
    try {
      this.jwtHelper.decodeToken(token);
      return true;
    } catch {
      return false;
    }
  }
  getDecodedToken<T>(token: string): T | null {
    try {
      return this.jwtHelper.decodeToken<T>(token);
    } catch {
      return null;
    }
  }
}
