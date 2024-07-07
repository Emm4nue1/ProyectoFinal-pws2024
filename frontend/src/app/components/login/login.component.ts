import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

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
  constructor (private loginService:LoginService){}

  inicioSesion(){
    this.loginService.loginUser(this.email, this.password).subscribe(
      response => {
        console.log('Inicio de sesión exitoso', response);
      },
      error => {
        console.error('Error al iniciar sesión', error);
      }
    );
  }

}
