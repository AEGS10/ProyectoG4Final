import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrarsitio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrarsitio.component.html',
  styleUrl: './registrarsitio.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrarsitioComponent {
  @Input() dato:any={};
  @Output()guardar = new EventEmitter<any>();
  @Output()cerrar = new EventEmitter<void>();
 
  enviar() {
    this.guardar.emit(this.dato);
  }

  cerrarDialogo() {
    this.cerrar.emit();
  } 
}
