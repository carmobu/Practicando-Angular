import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  formularioCredenciales = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required)
  });
  manejarEnvio() {
    if (this.formularioCredenciales.valid){
      console.log(this.formularioCredenciales.value.username);
      console.log(this.formularioCredenciales.value.password);
      console.log(this.formularioCredenciales.value.nombre);
    }
  }
}
