import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { RolService } from '../../services/rol.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.css'
})
export class UsuarioListaComponent {

  usuarios: Array<Usuario>;


  constructor(private router: Router,
              private usuarioService: UsuarioService 
  ) {
    this.usuarios = new Array<Usuario>();
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (result: any) => {
        this.usuarios = result;
        //console.log(this.usuarios);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  agregarUsuario(){
    this.router.navigate(['usuario-form','0']);
  }

  modificarUsuario(usuario: Usuario){
    //console.log(usuario);
    this.router.navigate(['usuario-form', usuario._id]); usuario
  }

  eliminarUsuario(usuario: Usuario): void {
    this.usuarioService.deleteUsuario(usuario).subscribe(
      (result: any) => {
        if(result.status == 1){
          alert('Usuario eliminado correctamente');
          location.reload()
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
