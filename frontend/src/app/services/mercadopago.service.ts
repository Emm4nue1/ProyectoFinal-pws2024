import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alquiler } from '../models/alquiler';

declare var MercadoPago: any;

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {
  private mercadoPago: any;
  readonly monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  urlBase: string = 'http://localhost:3000/api/mercadopago';

  constructor(private http: HttpClient) {
    this.mercadoPago = new MercadoPago("APP_USR-1536e292-06d7-4c55-b191-dceac72d056c", {
      locale: 'es-AR'
    });
  }

  createPreference(alquiler: Alquiler): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    var fechaPago = new Date();
    const orderData = {
      product_id: alquiler._id,
      title: "Pago de Alquiler",
      quantity: 1,
      description: "Mes de Pago: " + this.monthNames[fechaPago.getMonth()],
      price: alquiler.costoalquiler
    };

    const body = JSON.stringify(orderData);
    return this.http.post(`${this.urlBase}/create_preference`, body, httpOption);
  }

  async createCheckout(preferenceId: String) {
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

  formatDate(fechaAlquiler: Date) : String {
    const year = fechaAlquiler.getUTCFullYear();
    const month = String(fechaAlquiler.getUTCMonth() + 1).padStart(2, '0');
    const day = String(fechaAlquiler.getUTCDate()).padStart(2, '0');
    
    return `${day}-${month}-${year}`;
  }

  obtenerPago(payment_id: string){
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.urlBase + "/payment/" + payment_id, httpOption);
  }
}
