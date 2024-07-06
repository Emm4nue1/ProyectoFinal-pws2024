import { Component, OnInit } from '@angular/core';
import { NovedadService } from '../../services/novedad.service';
import { Novedad } from '../../models/novedad';
import { LocalService } from '../../services/local.service';
import { UsuarioService } from '../../services/usuario.service';
import { Local } from '../../models/local';
import { Usuario } from '../../models/usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-novedad-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './novedad-form.component.html',
  styleUrl: './novedad-form.component.css'
})
export class NovedadFormComponent{
  novedad: Novedad = new Novedad();
  local: Local = new Local();
  usuario: Usuario = new Usuario();

  locales: Array<Local> = [];
  usuarios: Array<Usuario> = [];

  accion: string = "new";

  constructor(private novedadService: NovedadService,
    private localService: LocalService,
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.iniciarVariable();
    this.obtenerLocales();
    this.obtenerUsuarios();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.iniciarVariable();
      } else {
        this.accion = "update";
        this.cargarNovedadActualizar(params['id']);
      }
    })
  }

  iniciarVariable() {
    this.novedad = new Novedad();
    this.local = new Local();
    this.usuario = new Usuario();
    this.locales = new Array<Local>();
  }

  cargarNovedadActualizar(idNovedad: string) {
    this.novedadService.getNovedadById(idNovedad).subscribe(
      (result) => {
        console.log(result);
        Object.assign(this.novedad, result);
        console.log(this.novedad);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  obtenerLocales() {
    this.localService.getLocales().subscribe(
      (result) => {
        console.log(result);
        let vlocal = new Local();
        result.forEach((element: any) => {
          Object.assign(vlocal, element);
          this.locales.push(vlocal);
          vlocal = new Local();
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuarios().subscribe(
      (result) => {
        console.log(result);
        let vusuario = new Usuario();
        result.forEach((element: any) => {
          Object.assign(vusuario, element);
          this.usuarios.push(vusuario);
          vusuario = new Usuario();
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  agregarNovedad() {
    console.log(this.novedad);
    this.novedadService.createNovedad(this.novedad).subscribe(
      (result) => {
        alert("Novedad creada");
        console.log(result);
        this.novedad = new Novedad();
        this.router.navigate(['novedad-lista']);
      },
      (error) => {
        alert("Error al crear la novedad");
        console.log(error);
      }
    )
  }

  actualizarNovedad() {
    this.novedadService.updateNovedad(this.novedad).subscribe(
      (result) => {
        alert("Novedad actualizada");
        console.log(result);
        this.novedad = new Novedad();
        this.router.navigate(['novedad-lista']);
      },
      (error) => {
        alert("Error al actualizar la novedad");
        console.log(error);
      }
    )
  }

  irALista() {
    this.router.navigate(['novedad-lista']);
  }
}
