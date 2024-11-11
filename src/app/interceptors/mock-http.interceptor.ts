import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mockFormData } from '../mocks/mock-form-data';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (req.url === 'https://test.com/api/submit-form') {
      console.log('Mocked HTTP POST request to:', req.url);

      const mockBody = { success: true, message: 'Форма успешно отправлена (mock)' };

      return of(new HttpResponse({ status: 200, body: mockBody }));
    }

    if (req.url === 'https://test.com/api/form-data') {
      console.log('Mocked HTTP GET request to:', req.url);

      return of(new HttpResponse({ status: 200, body: mockFormData }));
    }

    return next.handle(req);
  }
}