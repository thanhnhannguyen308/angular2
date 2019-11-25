import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService{
    private apiUrl: string = 'http://5ddba92c041ac10014de12f9.mockapi.io/api/employees';

    constructor(private http: HttpClient) {
    }

    GetListEmployee() : Observable<any[]>{
        return this.http.get(this.apiUrl) as Observable<any[]>;
    }
}