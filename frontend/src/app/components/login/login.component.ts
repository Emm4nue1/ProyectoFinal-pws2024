import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor (private loginService:LoginService, private authService: AuthService, private router: Router){
    if (authService.isLoggedIn()){
      router.navigateByUrl("/home");
    }
  }

  inicioSesion(){
    this.loginService.loginUser(this.email, this.password).subscribe(
      (result) => {
        var user = result;
        this.authService.login(user);
        this.router.navigateByUrl("/home");
      },
      error => {
        console.error('Error al iniciar sesión', error);
      }
    );
  }
}
