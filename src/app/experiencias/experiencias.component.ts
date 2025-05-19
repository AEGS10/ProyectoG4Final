// Importación del decorador de componente
import { Component } from '@angular/core';
// Módulos necesarios para el funcionamiento del componente
import { CommonModule } from '@angular/common';// Para directivas como *ngIf, *ngFor
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Experiencia {
  username: string;
  location: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-experiencias',
  standalone: true, // Declara que es un componente independiente
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {
  // Arreglo que almacenará las experiencias enviadas
  experiencias: Experiencia[] = [];

  // Objeto para vincular los datos del formulario
  nuevaExperiencia: Experiencia = {
    username: '',
    location: '',
    rating: 0,
    comment: ''
  };

  // Función que se llama al enviar el formulario
  enviarFormulario() {
    // Valida que todos los campos estén llenos
    if (
      this.nuevaExperiencia.username &&
      this.nuevaExperiencia.location &&
      this.nuevaExperiencia.rating &&
      this.nuevaExperiencia.comment
    ) {
      // Añade la experiencia al principio del array
      this.experiencias.unshift({ ...this.nuevaExperiencia });
      // Reinicia el formulario
      this.nuevaExperiencia = {
        username: '',
        location: '',
        rating: 0,
        comment: ''
      };
    }
  }

  // Devuelve una cadena de estrellas según el rating
  obtenerEstrellas(rating: number): string {
    return '⭐'.repeat(rating);
  }
}