import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formularioCredenciales = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  manejarEnvio() {
    if (this.formularioCredenciales.valid){
      console.log(this.formularioCredenciales.value.username);
      console.log(this.formularioCredenciales.value.password);
    }
  }
}
