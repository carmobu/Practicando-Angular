import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegalosComponent } from './components/regalos/regalos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Inicio' },
    { path: 'login', component: LoginComponent, title: 'Inicio de sesión' },
    { path: 'regalos', component: RegalosComponent, title: 'Regalos' },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];
