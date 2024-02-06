import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegalosService } from '../../services/regalos.service';
import { Regalo } from '../../interfaces/regalo';

@Component({
  selector: 'app-regalos',
  standalone: true,
  imports: [],
  templateUrl: './regalos.component.html',
  styleUrl: './regalos.component.css'
})
export class RegalosComponent {
  toastrService= inject(ToastrService);
  regalosServices= inject(RegalosService);


  ngOnInit(){
    this.manejarLeerTodos();
  }
  
  manejarLeerTodos(){
    this.regalosServices.leerTodos().subscribe((respuesta: any)=>{
      this.toastrService.show(respuesta.mensaje, respuesta.resultado)
      console.log(respuesta);
    });    
  }

  manejarCrear(){
    const nuevoRegalo: Regalo = {
      destinatario: 'Pepito',
      nombre: 'iPod',
      entregado: false,
    };
    this.regalosServices.crear(nuevoRegalo).subscribe((respuesta: any) => {
      this.toastrService.show(respuesta.mensaje, respuesta.resultado);
      console.log(respuesta);
    });
  }
  manejarLeer(){
    const id: string = '65bc576d1d34ab8848ef757b'
    this.regalosServices.leer(id).subscribe((respuesta: any)=>{
      this.toastrService.show(respuesta.mensaje, respuesta.resultado)
      console.log(respuesta);
    });
  }

  manejarActualizar(){
    const id: string = '65bc576d1d34ab8848ef757b'
    const nuevoRegalo: Regalo = {
      destinatario: 'Pepito',
      nombre: 'iPod',
      entregado: false,
    };
    this.regalosServices.actualizar(id, nuevoRegalo).subscribe((respuesta: any) => {
      this.toastrService.show(respuesta.mensaje, respuesta.resultado);
      console.log(respuesta);
    });
  }

  manejarEliminar(){
    const id: string = '6583a4277c0eae75c9a5fb60'
    this.regalosServices.eliminar(id).subscribe((respuesta: any)=>{
      this.toastrService.show(respuesta.mensaje, respuesta.resultado)
      console.log(respuesta);
    });    
  }
}