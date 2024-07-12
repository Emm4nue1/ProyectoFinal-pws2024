import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  urlHost: string = 'https://proyectofinal-pws2024-2.onrender.com/api/rol/';

  constructor(private _http:HttpClient) { 

  }

getRoles(): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }
  return this._http.get(this.urlHost, httpOptions);
}

}
