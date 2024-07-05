import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Propietario } from '../../../models/propietario';
import { UsuarioFormComponent } from '../../usuario-form/usuario-form.component';
import { UsuarioListaComponent } from '../../usuario-lista/usuario-lista.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterModule,UsuarioFormComponent,UsuarioListaComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
