import { Component } from '@angular/core';
import { PropietarioService } from '../../services/propietario.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Propietario } from '../../models/propietario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propietario-lista',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './propietario-lista.component.html',
  styleUrl: './propietario-lista.component.css'
})
export class PropietarioListaComponent {

  propietarios: Array<Propietario>;

  constructor(private propietarioService: PropietarioService,
    private router:Router
  ){
    this.propietarios = new Array<any>();  //Inicializo un array vacío para almacenar los propietarios obtenidos del backend.
    this.obtenerPropietarios();
    
  }

  obtenerPropietarios():void{
    this.propietarioService.getPropietarios().subscribe(
      (result:any)=>{
        this.propietarios=result;
        //console.log(this.propietarios);
      }, (error: any) => {
        console.log(error);
      }
    )
  }


  agregarPropietario(){
    this.router.navigate(['propietario-form',"0"]);
  }

  modificarPropietario(_id: string){
    this.router.navigate(['propietario-form', _id]);
  }

  eliminarPropietario(_id: string){
    this.propietarioService.deletePropietario(_id).subscribe(
      (result:any)=>{
        this.obtenerPropietarios();
      }, (error: any) => {
        console.log(error);
      }
    )
  }

}
