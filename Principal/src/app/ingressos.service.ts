import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Ingresso } from './Ingresso';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class IngressosService {

  url = 'https://localhost:5001/api/Ingressos';

  constructor(private http: HttpClient) { }

  CriaIngresso(ingresso: Ingresso): Observable<any> {
    return this.http.post<Ingresso>(this.url, ingresso, httpOptions)
  }
}
