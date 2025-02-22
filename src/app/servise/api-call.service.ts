import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url = 'https://6791098faf8442fd7378c6c9.mockapi.io/api/v1/usermodele';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
}
