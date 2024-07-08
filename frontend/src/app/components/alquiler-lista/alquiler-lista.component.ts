import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { LocalService } from '../../services/local.service';
import { AlquilerService } from '../../services/alquiler.service';
import { Local } from '../../models/local';
import { Usuario } from '../../models/usuario';
import { Alquiler } from '../../models/alquiler';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alquiler-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alquiler-lista.component.html',
  styleUrl: './alquiler-lista.component.css'
})
export class AlquilerListaComponent {
  local: Local = new Local();
  usuario: Usuario = new Usuario();
  alquiler: Alquiler = new Alquiler();
  alquileres: Array<Alquiler> = new Array<Alquiler>();

  constructor(private alquilerService: AlquilerService,
    private usuarioService: UsuarioService,
    private localService: LocalService,
    private router: Router) { 
    this.iniciarVariables();
      this.obtenerAlquiler();
  }

  iniciarVariables(){
    this.local = new Local();
    this.usuario = new Usuario();
    this.alquiler = new Alquiler();
    this.alquileres = new Array<Alquiler>();
  }

  obtenerAlquiler(){
    this.alquileres = new Array<Alquiler>();
    this.alquilerService.getAlquileres().subscribe(
      (result) => {
        console.log(result);
        let valquiler: Alquiler = new Alquiler();
        result.forEach((element: any) => {
          Object.assign(valquiler, element);
          this.alquileres.push(valquiler);
          valquiler = new Alquiler();
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  agregarAlquiler(){
    this.router.navigate(['alquiler-form', "0"]);
  }

  modificarAlquiler(idAlquiler: string){
    this.router.navigate(['alquiler-form', idAlquiler]);
  }

  eliminarAlquiler(idAlquiler: string){
    this.alquilerService.deleteAlquiler(idAlquiler).subscribe(
      (result) => {
        console.log(result);
        alert("Alquiler eliminado");
        this.obtenerAlquiler();
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

