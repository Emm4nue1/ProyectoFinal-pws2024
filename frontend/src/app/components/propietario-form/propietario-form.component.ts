import { Component } from '@angular/core';
import { Propietario } from '../../models/propietario';
import { PropietarioService } from '../../services/propietario.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propietario-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './propietario-form.component.html',
  styleUrl: './propietario-form.component.css'
})
export class PropietarioFormComponent {

  propietario!: Propietario;
  accion: string = "new";

  constructor(private propietarioService: PropietarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    //this.iniciarVariable();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.iniciarVariable();
      } else {
        this.accion = "update";
        this.cargarPropietario(params['id']);
      }
    })
  }


  iniciarVariable(): void {
    this.propietario = new Propietario();
  }

  registrarPropietario(): void {
    this.propietarioService.addPropietario(this.propietario).subscribe(
      (result: any) => {
        if (result.status == 1) {
          alert("Propietario registrado con exito");
          //this.router.navigate(['propietario']);
        }
      },
      (error: any) => {
        alert("Error al registrar Propietario");
        console.log(error);
      }
    )
    this.propietario = new Propietario();
  }

  cargarPropietario(id: string): void {
    this.propietarioService.getPropietarioById(id).subscribe(
      (result: any) => {
        this.propietario = result;
        //console.log(this.propietario);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  actualizarPropietario() {
    this.propietarioService.updatePropietario(this.propietario).subscribe(
      (result: any) => {
        if (result.status == 1) {
          alert("Propietario actualizado con exito");
          
        }
      },
      (error: any) => {
        console.log(error);
      }
    )
    this.propietario = new Propietario();
  }

  atras(){
  this.router.navigate(['propietario-lista']);
  }

}
