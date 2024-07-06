import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { UsuarioListaComponent } from '../usuario-lista/usuario-lista.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, UsuarioFormComponent, UsuarioListaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
