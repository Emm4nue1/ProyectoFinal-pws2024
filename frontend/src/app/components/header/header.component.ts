import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { PropietarioFormComponent } from '../propietario-form/propietario-form.component';
import { PropietarioListaComponent } from '../propietario-lista/propietario-lista.component';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { UsuarioListaComponent } from '../usuario-lista/usuario-lista.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, PropietarioFormComponent, PropietarioListaComponent, UsuarioFormComponent, UsuarioListaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
