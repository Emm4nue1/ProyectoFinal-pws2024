import { Component } from '@angular/core';
import { PromocionService } from '../../services/promocion.service';
import { Promocion } from '../../models/promocion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookModule, FacebookService, InitParams } from 'ngx-facebook';
import { ApiMethod } from 'ngx-facebook/providers/facebook';

@Component({
  selector: 'app-promocion-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promocion-lista.component.html',
  styleUrl: './promocion-lista.component.css'
})
export class PromocionListaComponent {
  msjPosteo?:string="hola prueba";
  promociones: Array<Promocion> = [];//Para obtener todas las sucripciones de la bd.

  constructor(private promocionService: PromocionService, private router: Router,private fb:FacebookService) {
    this.obtenerPromociones();
    this.posteoFb();
  }

  obtenerPromociones() {
    this.promocionService.getPromociones().subscribe(
      (result) => {
        console.log(result);
        this.promociones = result;
        
      },
      (error) => {
        console.log(error);
      }
    )
  }

  agregarPromocion() {
    this.router.navigate(['promocion-form', "0"]);
  }

  modificarPromocion(_id: string) {
    this.router.navigate(['promocion-form', _id]);
  }

  eliminarPromocion(_id: string) {
    this.promocionService.deletePromocionById(_id).subscribe(
      (result: any) => {
        this.obtenerPromociones();
      }, (error: any) => {
        console.log(error);
      }
    )
  }

  posteoFb(){
    var apiMethod: ApiMethod = "post";
    this.fb.api('/348066471731907/feed', apiMethod,
    {
    "message": this.msjPosteo,
    "access_token":"EAAKnza2tB7kBO9y0XfiOZCdJ19HYjMTZAdcX0dZBHbw6y7ilvSxk0q6m2VVay4WOaMHaD7QpI5H04GZBGl68NxaQ5gI7OgmaemVsEJcPCWpDqLi4nhZAOHkssNJkkzZCAQiadIZBfnfgxJ5NkFLMuEAI25NAJNPaXBRF6P4fDWWuESbPzst6wPDlXdqmjTZAyZBZAV5Q4JtkoADTnmiZCYdOIKcE0aV"
    });
    }

  sesionFb(){
      let initParams: InitParams = {
      appId: '1757474011058319',
      autoLogAppEvents : true,
      xfbml : true,
      version : 'v7.0'
      };
      this.fb.init(initParams);
      }
     
}
