import { Routes } from '@angular/router';
import { PropietarioFormComponent } from './components/propietario-form/propietario-form.component';
import { PropietarioListaComponent } from './components/propietario-lista/propietario-lista.component';

export const routes: Routes = [

    {path: 'propietario-form', component:PropietarioFormComponent},
    {path: 'propietario-form/:id', component:PropietarioFormComponent},
    {path: 'propietario-lista', component:PropietarioListaComponent},

];
