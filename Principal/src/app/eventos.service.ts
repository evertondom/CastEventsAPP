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

  RecuperaTodos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.url);
  }

  RecuperaPeloId(eventoId: number): Observable<Evento> {
    const apiUrl = `${this.url}/${eventoId}`;
    return this.http.get<Evento>(apiUrl);
  }

  CriaEvento(evento: Evento): Observable<any> {
    return this.http.post<Evento>(this.url, evento, httpOptions)
  }

  AtualizaEvento(evento: Evento): Observable<any> {
    return this.http.put<Evento>(this.url, evento, httpOptions);
  }

  ExcluiEvento(eventoId: number): Observable<any> {
    const apiUrl = `${this.url}/${eventoId}`;
    console.log(apiUrl)
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}
