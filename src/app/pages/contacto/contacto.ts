import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  mensajeEnviado: boolean = false;

  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  enviarFormulario(event: Event) {

    event.preventDefault();

    this.mensajeEnviado = true;

    this.nombre = '';
    this.correo = '';
    this.mensaje = '';

  }

}
