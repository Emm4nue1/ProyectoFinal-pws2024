import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { RolService } from '../../services/rol.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rol } from '../../models/rol';


@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.css'
})
export class UsuarioListaComponent {

  usuarios: Array<Usuario>;

  roles!: Array<Rol>;
  apellidoAux: string = "";
  rolAux: string = "";
  dniAux: number=0;

  constructor(private router: Router,
    private usuarioService: UsuarioService,
    private rolService: RolService
  ) {
    this.usuarios = new Array<Usuario>();
    this.getUsuarios("", "",0);
    this.cargarRoles();
  }

  buscarYLimpiar(): void {
    this.getUsuarios(this.apellidoAux, this.rolAux, this.dniAux);
    this.limpiarCampos();
  }
  getUsuarios(apellidoAux: string, rolAux: string, dniAux: number): void {
    //console.log(rolAux);
    if (rolAux == "Todos"){
      rolAux = "";
    }
    this.usuarioService.getUsuariosFiltros(apellidoAux, rolAux, dniAux ).subscribe(
      (result: any) => {
        this.usuarios = result;
        //console.log(this.usuarios);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
    // Método para limpiar los campos
    limpiarCampos(): void {
      this.rolAux = '';
      this.apellidoAux = '';
      this.dniAux = 0 ;
    }

  agregarUsuario() {
    this.router.navigate(['usuario-form', '0']);
  }

  modificarUsuario(usuario: Usuario) {
    //console.log(usuario);
    this.router.navigate(['usuario-form', usuario._id]); usuario
  }

  eliminarUsuario(usuario: Usuario): void {
    this.usuarioService.deleteUsuario(usuario).subscribe(
      (result: any) => {
        if (result.status == 1) {
          alert('Usuario eliminado correctamente');
          location.reload()
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  cargarRoles() {
    this.roles = new Array<Rol>();
    this.rolService.getRoles().subscribe(
      result => {
        let vrol: Rol = new Rol();
        result.forEach((element: any) => {
          Object.assign(vrol, element);
          this.roles.push(vrol);
          vrol = new Rol();
        });
      }
    )
  }

}
