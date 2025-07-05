import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recomendaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css'] 
})
export class RecomendacionesComponent {
  mostrarCuadro: boolean = false; 
  contenidoModal: string = '';    

  mostrarInfo(texto: string) {
    this.contenidoModal = texto;
    this.mostrarCuadro = true;
  }

  cerrarInfo() {
    this.mostrarCuadro = false;
  }
}

