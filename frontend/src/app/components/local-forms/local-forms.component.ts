import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '../../services/local.service';
import { Local } from '../../models/local';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-local-forms',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './local-forms.component.html',
  styleUrl: './local-forms.component.css'
})
export class LocalFormsComponent {

  local = new Local();
  accion: string = "new";
  
  constructor( private router:Router, 
    private localService:LocalService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.iniciarLocales();
      } else {
        this.accion = "update";
        this.cargarLocal( params['id'] );
        
      }
    })
  }

  cargarLocal(id: string): void {
    this.localService.getLocal(id).subscribe(
      (result) => {
        this.local = result;
      },
      error => {
        alert("Error: " + error);
      }); 
  }


  iniciarLocales():void{
    this.local = new Local();
  }


  //Crear Locales
  crearLocal(): void {
    this.local.usuario = this.authService.getUserId()!;
    this.localService.postLocal(this.local).subscribe(
      (result) => {
        console.log(result)
       this.router.navigate(['local-lista']);
      },
      error => {
        alert("Error: " + error);
      });
  }

  //Modificar Local
  modificarLocal() {
    
    this.localService.putLocal(this.local).subscribe(
      (result)=>{
        //console.log(result);
        alert("Local Actualizado");
        this.router.navigate(['local-lista'])

      },
      error => {
        alert("Error: " + error);
      });

  }

  volverLocal(){
    this.router.navigate(['local-lista']);
  }





}
