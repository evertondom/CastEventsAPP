import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { User } from './User';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  url = 'https://localhost:5001/api/Users'

  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  PegarPeloId(userId: number): Observable<User> {
    const apiUrl = `${this.url}/${userId}`;
    return this.http.get<User>(apiUrl);
  }

  SalvarUser(user: User): Observable<any> {
    return this.http.post<User>(this.url, user, httpOptions);
  }

  AtualizarUser(user: User): Observable<any> {
    return this.http.put<User>(this.url, user, httpOptions);
  }

  ExcluirUser(userId: number): Observable<any> {
    const apiUrl = `${this.url}/${userId}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }

}
