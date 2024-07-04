import { Component } from '@angular/core';
import { PromocionService } from '../../services/promocion.service';

@Component({
  selector: 'app-promocion-form',
  standalone: true,
  imports: [],
  templateUrl: './promocion-form.component.html',
  styleUrl: './promocion-form.component.css'
})
export class PromocionFormComponent {

  constructor(private promocionService: PromocionService){
    this.obtenerCateforias();
  }

  obtenerCateforias(){
    this.promocionService.getPromociones().subscribe(
      (result)=>{
        console.log(result);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}
