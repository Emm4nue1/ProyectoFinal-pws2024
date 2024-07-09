import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare var MercadoPago: any;

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {
  private mercadoPago: any;

  urlBase: string = 'http://localhost:3000/api/mercadopago';

  constructor(private http: HttpClient) {
    this.mercadoPago = new MercadoPago("APP_USR-1536e292-06d7-4c55-b191-dceac72d056c", {
      locale: 'es-AR'
    });
  }

  createPreference(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    const orderData = {
      quantity: 1,
      description: "test",
      price: 20
    };

    const body = JSON.stringify(orderData);
    return this.http.post(`${this.urlBase}/create_preference`, body, httpOption);
  }

  async createCheckout(preferenceId: string) {
    await this.mercadoPago.bricks().create("wallet", "wallet_container", {
      initialization: {
        preferenceId: preferenceId,
      },
      customization: {
        texts: {
          valueProp: 'smart_option',
        },
      },
    });
  }
}
