import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url: string = 'https://proyectofinal-pws2024-2.onrender.com/api/usuario/login';
  constructor(private http: HttpClient) { }

  loginUser(email:string, password:string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { email: email, password: password };
    return this.http.post(this.url, body, { headers: headers });
  }
}
