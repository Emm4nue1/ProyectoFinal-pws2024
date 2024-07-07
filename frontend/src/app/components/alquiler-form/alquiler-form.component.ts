import { Component } from '@angular/core';
import { AlquilerService } from '../../services/alquiler.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalService } from '../../services/local.service';
import { UsuarioService } from '../../services/usuario.service';
import { Local } from '../../models/local';
import { Usuario } from '../../models/usuario';
import { Alquiler } from '../../models/alquiler';

@Component({
  selector: 'app-alquiler-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alquiler-form.component.html',
  styleUrl: './alquiler-form.component.css'
})
export class AlquilerFormComponent {

  locales = Array<Local>();
  propietarios = Array<Usuario>();
  alquiler = new Alquiler();
  propietario = new Usuario();
  local = new Local();

  constructor(
    private alquilerService: AlquilerService,
    private localService: LocalService,
    private usuarioService: UsuarioService
  ){
    this.cargarLocales();
    this.cargarPropietarios();
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

    iniciarVariable(): void {
      this.alquiler = new Alquiler();
      this.locales = new Array<Local>();
    }

    cargarPropietarios(): void {
      this.usuarioService.getUsuarios().subscribe(
        (result: any) => {
          this.propietarios = result;
          console.log(this.propietarios);
        },
        (error: any) => {
          console.log(error);
        }
      )
    }

    crearAlquiler(){
      console.log("entro en crear alquiler",this.alquiler);
      this.alquilerService.addAlquiler(this.alquiler).subscribe(
        (result)=>{
          console.log(result);
          
        },
        (error)=>{
          console.log(error);
        }
      )
    }

}
