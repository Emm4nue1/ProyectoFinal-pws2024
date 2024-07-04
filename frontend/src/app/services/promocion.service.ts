import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocion } from '../models/promocion';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  urlBase: string = 'http://localhost:3000/api/promocion/';

  constructor(private http: HttpClient) { }

  getPromociones(): Observable<Promocion>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get<Promocion>(this.urlBase, httpOption);
  }

  getPromocionById(idPromocion: string): Observable<Promocion>{
    let httpOption ={
      headers: new HttpHeaders({

      })
    }

    return this.http.get<Promocion>(this.urlBase + idPromocion, httpOption)
  }

  createPromocion(promocion: Promocion): Observable<Promocion>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Promocion>(this.urlBase, promocion, httpOption)
  }

  updatePromocion(promocion: Promocion): Observable<Promocion>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<Promocion>(this.urlBase + promocion._id, promocion, httpOption)
  }

  deletePromocionById(idPromocion: string): Observable<Promocion>{
    let httpOtion = {
      headers:  new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.delete<Promocion>(this.urlBase + idPromocion, httpOtion);
  }
}
