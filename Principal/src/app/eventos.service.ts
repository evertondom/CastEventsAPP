import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Evento } from './Evento';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  url = 'https://localhost:5001/api/Eventos';

  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.url);
  }
}
