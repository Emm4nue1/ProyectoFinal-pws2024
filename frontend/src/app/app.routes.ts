import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { PromocionFormComponent } from './components/promocion-form/promocion-form.component';
import { PromocionListaComponent } from './components/promocion-lista/promocion-lista.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

    {path: 'usuario-lista', component:UsuarioListaComponent},
    {path: 'usuario-form', component:UsuarioFormComponent},
    {path: 'usuario-form/:id', component:UsuarioFormComponent},
    {path: 'promocion-form', component: PromocionFormComponent},
    {path: 'promocion-form/:id', component: PromocionFormComponent},
    {path: 'promocion-lista', component: PromocionListaComponent},
    {path: 'login', component:LoginComponent}, 

    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];
