import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {ErrorService} from '../services/error';
import {catchError, throwError} from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errors = inject(ErrorService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 0) {
        errors.setMessage('Network problem: Request blocked or you are offline');
      }else if (err.status === 404) {
        errors.setMessage('Not found: the data does not exist')
      }else if (err.status >= 500) {
        errors.setMessage('Server problem: please try again later')
      }else {
        errors.setMessage('Someting wrong with the request')
      }
      return throwError(() => err);
    }),
  );
};
