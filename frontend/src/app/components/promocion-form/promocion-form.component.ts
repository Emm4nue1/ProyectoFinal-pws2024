import { Component } from '@angular/core';
import { PromocionService } from '../../services/promocion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Promocion } from '../../models/promocion';
import { Usuario } from '../../models/usuario';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from '../../services/local.service';
import { Local } from '../../models/local';


@Component({
  selector: 'app-promocion-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promocion-form.component.html',
  styleUrl: './promocion-form.component.css'
})
export class PromocionFormComponent {

  promocion = new Promocion();
  accion: string = "new";
  locales = Array<Local>();
  


  constructor(
    private promocionService: PromocionService,
    private activatedRoute: ActivatedRoute,
    private localService: LocalService
  ){
    this.cargarLocales()
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.iniciarVariable();
      } else {
        this.accion = "update";
        // this.cargarPropietario(params['id']);
      }
    })
  }

  iniciarVariable(): void {
    this.promocion = new Promocion();
    this.locales = new Array<Local>();
  }

  crearPromocion(){
    this.promocionService.postPromocion(this.promocion).subscribe(
      (result)=>{
        console.log(result);
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  cargarPromocion(id: string): void {
    this.promocionService.getPromocionById(id).subscribe(
      (result: any) => {
        this.promocion = result;
        //console.log(this.propietario);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  cargarLocales(): void {
    this.localService.getLocales().subscribe(
      (result: any) => {
        this.locales = result;
        console.log(this.locales);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
