import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { Rol } from '../../models/rol';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent {

  accion: string = 'new';
  usuario!: Usuario;
  roles!: Array<Rol>;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private rolService: RolService
  ) {
    this.iniciarVariable();
    this.cargarRoles();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '0') {
        this.accion = 'new';
        this.iniciarVariable();
      } else {
        this.accion = 'update';
        this.cargarUsuario(params['id']);
      }
    });
  }

  iniciarVariable(): void {
    this.usuario = new Usuario();
    this.roles = new Array<Rol>();
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


  agregarUsuario(){
    console.log(this.usuario);
    this.usuarioService.addUsuario(this.usuario).subscribe(
      result => {
        if (result.status ==  1){
          alert("Usuario registrado con exito");
          this.router.navigate(['usuario-lista'])
        }
      },
      error => {
        alert("Error al registrar Usuario");
        console.log(error);
      }
    )
    //this.usuario = new Usuario();
  }

  acualizarUsuario(){
    this.usuarioService.updateUsuario(this.usuario).subscribe(
      result => {
        if (result.status ==  1){
          alert("Usuario actualizado con exito");
          this.router.navigate(['usuario-lista'])
        }
      },
      (error: any) => {
        alert("Error al actualizar Usuario");
        console.log(error);
      }
    )
    this.usuario = new Usuario();
  }

  cargarUsuario(id: string): void {
    this.usuarioService.getUsuario(id).subscribe(
      (result: any) => {
        this.usuario = result;
        //console.log(this.propietario);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  atras(){
    this.router.navigate(['usuario-lista'])
  }

}