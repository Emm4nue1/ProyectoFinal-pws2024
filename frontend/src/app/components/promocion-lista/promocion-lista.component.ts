import { Component } from '@angular/core';
import { PromocionService } from '../../services/promocion.service';
import { Promocion } from '../../models/promocion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promocion-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promocion-lista.component.html',
  styleUrl: './promocion-lista.component.css'
})
export class PromocionListaComponent {

  promociones: Array<Promocion> = [];//Para obtener todas las sucripciones de la bd.

  constructor(private promocionService: PromocionService, private router: Router){
    this.obtenerPromociones();
  }

  obtenerPromociones(){
    this.promocionService.getPromociones().subscribe(
      (result)=>{
        // console.log(result);
        this.promociones= result;
        
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  agregarPromocion(){
    this.router.navigate(['promocion-form',"0"]);
  }

  modificarPromocion(_id: string){
    this.router.navigate(['promocion-form', _id]);
  }

  eliminarPromocion(_id: string){
    this.promocionService.deletePromocionById(_id).subscribe(
      (result:any)=>{
        this.obtenerPromociones();
      }, (error: any) => {
        console.log(error);
      }
    )
  }

}
