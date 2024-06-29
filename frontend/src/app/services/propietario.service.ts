import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propietario } from '../models/propietario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  
  
  urlBase: string = 'http://localhost:3000/api/propietario/';

  constructor(private _http: HttpClient) { }

  getPropietarios(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get(this.urlBase, httpOptions);
  }

  getPropietarioById(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get(this.urlBase + id, httpOptions);
  }  

  addPropietario(propietario: Propietario): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any = JSON.stringify(propietario)
    return this._http.post(this.urlBase, body, httpOptions);
  }

  updatePropietario(propietario: Propietario): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any = JSON.stringify(propietario)
    return this._http.put(this.urlBase + propietario._id, body, httpOptions);
  }

  deletePropietario(id: string): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.delete(this.urlBase + id, httpOptions);
  }
}
