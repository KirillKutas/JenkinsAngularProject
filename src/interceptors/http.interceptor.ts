import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfigInterceptor} from './app.config.interceptor';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private appConfigInterceptor: AppConfigInterceptor) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
      //url: this.appConfigInterceptor.apiUrl + req.url
      url: 'http://localhost:12648/api' + req.url
    });
    return next.handle(dupReq);
  }
}
