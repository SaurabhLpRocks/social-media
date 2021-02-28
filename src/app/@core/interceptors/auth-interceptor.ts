import { appConstants } from './../../@shared/constants/app.constant';
import { Router } from '@angular/router';
import { User } from '@shared/typings';
import { AuthService } from './../../auth/auth.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // #region Public Methods (1)

  /**
   *
   */
  constructor(private authService: AuthService, private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let successResponse: HttpResponse<any>;
    let errorResponse: HttpErrorResponse;
    const isRequestToAuthAPI = !!(
      req.url.includes('/login') || req.url.includes('/register')
    );
    const userLocalStorage: any = this.authService.currentUserValue;
    const tokenLs = userLocalStorage?.token;
    const addTokenToReq = !isRequestToAuthAPI && !!tokenLs;
    const token = addTokenToReq ? tokenLs ?? '' : '';
    const headers: HttpHeaders = addTokenToReq
      ? req.headers.set('Authorization', `Bearer ${token}`)
      : req.headers;
    const reqUpdate = addTokenToReq ? { headers } : {};

    // Clone the request and replace the original
    return next.handle(req.clone(reqUpdate)).pipe(
      tap(
        // Succeeds when there is a response; ignore other events
        (event) => {
          if (event instanceof HttpResponse) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            successResponse = event;
          }
        },
        // Operation failed; error is an HttpErrorResponse
        (error) => {
          if (error instanceof HttpErrorResponse) {
            errorResponse = error;
          }
        }
      ),
      // Handle auth errors
      finalize(() => {
        const isAuthError =
          errorResponse &&
          !!(errorResponse.status === 401 || errorResponse.status === 403);
        if (isAuthError) {
          localStorage.clear();
          // window.location.href = '#login';
          this.router.navigate([appConstants.loginRoute]);
        }
      })
    );
  }

  // #endregion Public Methods (1)
}
