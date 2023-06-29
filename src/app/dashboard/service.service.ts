import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    // const tasks = of(TASKS)
    // return tasks
    return this.http.get<any[]>(this.apiUrl + '/users/getallusers');
  }

  getAllTransactions(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl + '/bookings/getbookings');
  }
}
