import {usersListMock} from "./users.mock";
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpHeaders,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

type Mock = {
  url: string;
  body: any;
  status: number;
};


@Injectable()
export class MockInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mock = {url: '\/api\/users', body: usersListMock, status: 200};
    if (mock) {
      return this.handleHttpParams(mock, request.params);
    }
    return next.handle(request);
  }

  handleHttpParams(mock: Mock, httpParams: HttpParams): Observable<HttpEvent<any>> {
    let body = mock.body;

    return of(new HttpResponse({
      body,
      status: mock.status,
      headers: new HttpHeaders({'content-type': 'application/vnd.api+json'})
    }));
  }
}