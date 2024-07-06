import { Component } from '@angular/core';
import { PromocionService } from '../../services/promocion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Promocion } from '../../models/promocion';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
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
        this.cargarPromocionActualizar(params['id']);
      }
    })
  }

  iniciarVariable(): void {
    this.promocion = new Promocion();
    this.locales = new Array<Local>();
  }

  crearPromocion(){
    this.promocion.fechaInicio.toString();
    this.promocion.fechaFin.toString();
    this.promocionService.postPromocion(this.promocion).subscribe(
      (result)=>{
        console.log(result);
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  cargarPromocionActualizar(id: string): void {
    this.promocionService.getPromocionById(id).subscribe(
      (result: any) => {
        console.log(result);
        this.promocion = result;
        // this.promocion.nroLocal= this.promocion.local.numeroLocal;
        this.promocion.fechaInicio= this.parsearFecha(new Date(result.fechaInicio))
        this.promocion.fechaFin= this.parsearFecha(new Date(result.fechaFin))
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  parsearFecha(fecha: Date): string {
    var anio = fecha.getUTCFullYear();
    var mes = String(fecha.getUTCMonth() + 1).padStart(2, '0');
    var dia = String(fecha.getUTCDate()).padStart(2, '0');
    return `${anio}-${mes}-${dia}`;
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

  modificarPromocion(){
    this.promocionService.updatePromocion(this.promocion).subscribe(
      (result)=>{
        console.log(result);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  irALista(){
    this.router.navigate(['promocion-lista']);
    }

}
