import { Component, inject } from '@angular/core';
import { AlquilerService } from '../../services/alquiler.service';
import { Local } from '../../models/local';
import { Usuario } from '../../models/usuario';
import { Alquiler } from '../../models/alquiler';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constantes } from '../../helpers/constantes';
import { AuthService } from '../../services/auth.service';
import { MercadopagoService } from '../../services/mercadopago.service';

@Component({
  selector: 'app-alquiler-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alquiler-lista.component.html',
  styleUrl: './alquiler-lista.component.css'
})
export class AlquilerListaComponent {
  rol = Constantes;
  local: Local = new Local();
  usuario: Usuario = new Usuario();
  alquiler: Alquiler = new Alquiler();
  alquileres: Array<Alquiler> = new Array<Alquiler>();
  //injecto el servicio de toast.
  toastSrvc= inject(ToastrService);

  constructor(private alquilerService: AlquilerService,
    private authService: AuthService,
    private router: Router, 
    private mercadopagoService: MercadopagoService) { 
    this.iniciarVariables();
      this.obtenerAlquiler();
  }

  hasRole(role: String){
    return this.authService.getRole() == role;
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

  pagarAlquiler(alquiler: Alquiler){
    this.mercadopagoService.createPreference(alquiler).subscribe({
      next: (result) => {
        window.location.href = result.sandbox_init_point;
      },
      error: (error) => {
        alert(error);
      }
    });
  }

  createCheckoutButton(preferenceId: any){
    this.mercadopagoService.createCheckout(preferenceId);
  }

  pagarAdelanto(idAlquiler: string){
    this.router.navigate(['alquiler-form', idAlquiler]);
  }

  modificarAlquiler(idAlquiler: string){
    this.router.navigate(['alquiler-form', idAlquiler]);
  }

  eliminarAlquiler(idAlquiler: string){
    this.alquilerService.deleteAlquiler(idAlquiler).subscribe(
      (result) => {
        console.log(result);
        this.toastSrvc.success("Alquiler eliminado", "Operación exitosa");
        this.obtenerAlquiler();
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

