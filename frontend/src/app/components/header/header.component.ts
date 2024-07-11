import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { UsuarioListaComponent } from '../usuario-lista/usuario-lista.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MercadopagoService } from '../../services/mercadopago.service';
import { Constantes } from '../../helpers/constantes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, UsuarioFormComponent, UsuarioListaComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  rol = Constantes;

  constructor(private authService: AuthService, private router: Router, private mercadopagoService: MercadopagoService) {
  }

  isAuthenticated(){
    return this.authService.isLoggedIn();
  }

  getUserName(){
    return this.authService.getUserEmail();
  }

  cerrarSesion(){
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

  hasRole(role: String){
    return this.authService.getRole() == role;
  }

  comprar(){
    this.mercadopagoService.createPreference().subscribe({
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
}
