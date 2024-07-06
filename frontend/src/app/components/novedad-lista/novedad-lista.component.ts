import { Component } from '@angular/core';
import { NovedadService } from '../../services/novedad.service';
import { Novedad } from '../../models/novedad';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novedad-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './novedad-lista.component.html',
  styleUrl: './novedad-lista.component.css'
})
export class NovedadListaComponent {
  novedad: Novedad = new Novedad();
  novedades: Array<Novedad> = [];

  constructor(private novedadService: NovedadService,
    private router: Router) {
    this.novedad = new Novedad();
    this.novedades = [];

    this.obtenerNovedades();
  }

  obtenerNovedades() {
    this.novedades = new Array<Novedad>();
    this.novedadService.getNovedades().subscribe(
      (result) => {
        console.log(result);
        let vnovedad = new Novedad();
        result.forEach((element: any) => {
          Object.assign(vnovedad, element);
          this.novedades.push(vnovedad);
          vnovedad = new Novedad();
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  agregarNovedad() {
    this.router.navigate(['novedad-form', "0"]);
  }

  modificarNovedad(idNovedad: string) {
    this.router.navigate(['novedad-form', idNovedad]);
  }

  eliminarNovedad(idNodevad: string) {
    this.novedadService.deleteNovedad(idNodevad).subscribe(
      (result) => {
        console.log(result);
        alert("Novedad eliminada");
        this.obtenerNovedades();
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
