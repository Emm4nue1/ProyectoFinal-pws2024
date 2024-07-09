import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {
  private public_key: String = "dsad";
  urlBase: string = 'http://localhost:3000/api/mercadopago/';

  constructor(private http: HttpClient) { }

  createPreference(){

  }
}
