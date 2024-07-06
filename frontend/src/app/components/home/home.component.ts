import { Component } from '@angular/core';
import { ContenidoComponent } from '../layout/contenido/contenido.component';
import { SlideComponent } from '../layout/slide/slide.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContenidoComponent,SlideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
