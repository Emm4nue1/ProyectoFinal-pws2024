import { Component } from '@angular/core';
import { Local } from '../../models/local';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent {


  locales: Array<Local> = [];

  constructor( private router:Router , private localService:LocalService ) {
    this.verLocales();

  }


  verLocales():void{

    this.localService.getLocales().subscribe(
      result => {
        console.log(result);
        this.locales=result;
      })
  }


  modificarLocal(_id:string){
    this.router.navigate(['local-forms', _id]);
  }

  agregarLocal() {
    this.router.navigate(['local-forms', "0"]);
  }
  //Creacion de Local


}
