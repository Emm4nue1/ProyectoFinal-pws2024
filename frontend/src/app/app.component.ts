import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PromocionFormComponent } from './components/promocion-form/promocion-form.component';
import { PromocionListaComponent } from './components/promocion-lista/promocion-lista.component';
import { FacebookModule } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoginComponent,PromocionFormComponent,PromocionListaComponent,FacebookModule.forRoot()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
