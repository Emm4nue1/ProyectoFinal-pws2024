import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alquiler } from '../models/alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  urlHost: string = 'http://localhost:3000/api/alquiler/';

  constructor(private _http: HttpClient) {
    
   }

   getAlquileres(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
    }
    return this._http.get(this.urlHost, httpOptions);
  }

  getAlquiler(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
    }
    return this._http.get(this.urlHost + id, httpOptions);
  }
  
  addAlquiler(alquiler: Alquiler):Observable<any>{
    console.log("entro addAlquiler",alquiler);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(alquiler)
    return this._http.post(this.urlHost, body, httpOptions);
  }

  updateAlquiler(alquiler: Alquiler): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(alquiler)
    return this._http.put(this.urlHost + alquiler._id, body, httpOptions);
  }

  deleteAlquiler(alquiler: Alquiler): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
    }
    return this._http.delete(this.urlHost + alquiler._id, httpOptions);
  }
}
