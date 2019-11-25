import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiUrl: string = 'http://5ddba92c041ac10014de12f9.mockapi.io/api/employees';
  constructor(protected http: HttpClient) { }

  get(){
    return this.http.get(
      `${this.apiUrl}`
    ) as Observable<Array<any>>;
  }
}
