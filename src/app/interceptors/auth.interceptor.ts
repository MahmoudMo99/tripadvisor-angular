import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/auth/token.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = inject(TokenService).getToken();

  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(request);
};
