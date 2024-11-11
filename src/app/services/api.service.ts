import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestForm } from '../models/test-form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://test.com/api/submit-form';
  private formDataUrl = 'https://test.com/api/form-data';

  constructor(private http: HttpClient) { }

  public getFormData(): Observable<{ [key: string]: any }> {
    return this.http.get<{ [key: string]: any }>(this.formDataUrl);
  }

  public postFormData(testForm: TestForm): Observable<any> {
    return this.http.post(this.apiUrl, testForm);
  }
}