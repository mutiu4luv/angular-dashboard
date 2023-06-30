import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  private apiUrl = 'http://localhost5000/api/users';

  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'login', data);
  }
}
