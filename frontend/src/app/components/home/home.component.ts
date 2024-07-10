import { Component } from '@angular/core';
import { LocalService } from '../../services/local.service';
import { Local } from '../../models/local';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  locales: Array<Local> = [];
  constructor(private localService: LocalService) {
    this.obtenerLocales();
   }

   obtenerLocales() {
    this.localService.getLocalesPublicos().subscribe(
      (result) => {
        let vlocal = new Local();
        result.forEach((element: any) => {
          Object.assign(vlocal, element);
          this.locales.push(vlocal);
          vlocal = new Local();
        });
        console.log(this.locales);
      },
      (error) => {
        console.log(error);
      }
    )
   }
}
