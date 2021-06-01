import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = 'f91d1f7381fcb43d4f275090f42d4a1d40cdda2d';
    
    request = request.clone({setHeaders: {Authorization: 'Bearer ' + TOKEN}});
    return next.handle(request);
  }
}
