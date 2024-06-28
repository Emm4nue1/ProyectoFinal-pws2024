import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { PropietarioFormComponent } from '../propietario-form/propietario-form.component';
import { PropietarioListaComponent } from '../propietario-lista/propietario-lista.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, PropietarioFormComponent, PropietarioListaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
