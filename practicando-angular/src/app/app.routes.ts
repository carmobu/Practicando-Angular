import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegalosComponent } from './components/regalos/regalos.component';
import { Error404Component } from './components/error404/error404.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: 'regalos', component: RegalosComponent, title: 'Regalos' },
    { path: 'crear-usuario', component: CrearUsuarioComponent, title: 'Regalos' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component, title: 'Error 404' },
];
