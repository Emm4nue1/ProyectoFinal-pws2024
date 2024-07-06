import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovedadService {

  urlBase: string = 'http://localhost:3000/api/local/novedades/';

  constructor(private http: HttpClient) { }

  getNovedades(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      })
    }
    return this.http.get(this.urlBase, httpOption);
  }

  createNovedad(novedad: any): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any = JSON.stringify(novedad);
    return this.http.post(this.urlBase, body, httpOption);
  }

  getNovedadById(idNovedad: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      })
    }
    return this.http.get(this.urlBase + idNovedad, httpOption);
  }

  updateNovedad(novedad: any): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any = JSON.stringify(novedad);
    return this.http.put(this.urlBase + novedad._id, body, httpOption);
  }
}