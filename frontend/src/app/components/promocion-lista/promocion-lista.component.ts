import { Component, inject } from '@angular/core';
import { PromocionService } from '../../services/promocion.service';
import { Promocion } from '../../models/promocion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';
import { ApiMethod } from 'ngx-facebook/providers/facebook';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-promocion-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promocion-lista.component.html',
  styleUrl: './promocion-lista.component.css'
})
export class PromocionListaComponent {
  msjPosteo?: string;
  promociones: Array<Promocion> = [];//Para obtener todas las sucripciones de la bd.
  btnFacebook: boolean = false;
  sortOrder: string = "";

  toastSrvc = inject(ToastrService);

  constructor(private promocionService: PromocionService,
    private router: Router,
    private fbService: FacebookService,
    private authService: AuthService) {
    if(!this.authService.isLoggedIn()){
      this.router.navigateByUrl("/home");
      return;
    }
  
    this.sesionFb();
    this.obtenerPromociones();
  }

  hasRole(role: String) {
    return this.authService.getRole() == role;
  }

  obtenerPromociones(): void {
    this.promocionService.getPromocionesFiltro(this.sortOrder).subscribe(
      result => {
        this.promociones = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSortOrderChange(sortOrder: string): void {
    this.sortOrder = sortOrder;
    this.obtenerPromociones();
  }

  agregarPromocion() {
    this.router.navigate(['promocion-form', "0"]);
  }

  modificarPromocion(_id: string) {
    this.router.navigate(['promocion-form', _id]);
  }

  eliminarPromocion(_id: string) {
    this.promocionService.deletePromocionById(_id).subscribe(
      (result: any) => {
        this.toastSrvc.success("Promocion eliminada correctamente", "Promocion eliminada correctamente");
        this.obtenerPromociones();
      }, (error: any) => {
        console.log(error);
      }                                             
    )
  }

  posteoFb(msj:string, numeroLocal: string) {
    this.btnFacebook = true;
    var apiMethod: ApiMethod = "post";
    var newMsg = "Pasa por nuestro local: " + numeroLocal + "\n";
    newMsg += msj;

    this.msjPosteo=newMsg;
    this.fbService.api('/348066471731907/feed', apiMethod,
      {
        "message": this.msjPosteo,
        "access_token": "EAAKnza2tB7kBOwQPK9Y0ymkKZBmdZCtWrZCElkf1JCDXGsy0eL8UJkh6kX5sEwTgTvzmVF134eqWZAZBFDlVQX4I0ckhmQQStqQkrDCmGrQEIAqMGkMqCxwZAuisYVVWvH3EV3otsoWTZBYZCxgf7MjJHk5BGsJuv7K8hvHDY0CF323BBvNZBTihZBiCBjAHHQHRKdFPW1aJxXABfr9e4WmvgoYLrZAKQZDZD"
      });

    this.toastSrvc.success("Publicación reposteada con éxito.", "Facebook");
    this.btnFacebook = false;
  }

  sesionFb() {
    let initParams: InitParams = {
      appId: '1757474011058319',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v7.0'
    };
    this.fbService.init(initParams);
  }
}