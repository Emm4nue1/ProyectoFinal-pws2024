import { Component } from '@angular/core';
import { Local } from '../../models/local';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent {


  locales: Array<Local> = [];

  // habilitadoAux!:boolean;
  // alquiladoAux!:boolean;

  habilitadoAux: boolean | undefined = undefined;
  alquiladoAux: boolean | undefined = undefined;



  constructor(private router: Router, private localService: LocalService) {
    this.verLocales();
    //this.verLocalesFiltros(false,false);

  }


  //Muestra lista de Locales
  verLocales(): void {
    this.habilitadoAux = undefined;
    this.alquiladoAux = undefined;
    this.localService.getLocales().subscribe(
      result => {
        //console.log(result);
        this.locales = result;
      },
      (error) => {
        console.log(error);
      })
  }


  verLocalesFiltros(): void {
    console.log(this.habilitadoAux, this.alquiladoAux);
    this.localService.getLocalesFiltros(this.habilitadoAux, this.alquiladoAux).subscribe(
      result => {
        //console.log(result);
        this.locales = result;
      },
      (error) => {
        console.log(error);
      })
  }



  modificarLocal(_id: string) {
    console.log(this.locales);
    this.router.navigate(['local-forms', _id]);
  }

  agregarLocal() {
    this.router.navigate(['local-forms', "0"]);
  }


  //Elimina Local de la Lista
  eliminarLocal(_id: string) {
    this.localService.deleteLocal(_id).subscribe(
      (result: any) => {
        this.verLocales();

      }, (error: any) => {
        console.log(error);
      }
    )
  }





}
