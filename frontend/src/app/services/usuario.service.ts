import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlHost: string = 'http://localhost:3000/api/usuario/';

  constructor(private _http: HttpClient ) {

  }

  getUsuarios(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
    }
    return this._http.get(this.urlHost, httpOptions);
  }

  getUsuario(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
    }
    return this._http.get(this.urlHost + id, httpOptions);
  }
  
  addUsuario(usuario:Usuario):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(usuario)
    return this._http.post(this.urlHost, body, httpOptions);
  }

  updateUsuario(usuario: Usuario): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(usuario)
    return this._http.put(this.urlHost + usuario._id, body, httpOptions);
  }

  deleteUsuario(usuario: Usuario): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
    }
    return this._http.delete(this.urlHost + usuario._id, httpOptions);
  }

}
