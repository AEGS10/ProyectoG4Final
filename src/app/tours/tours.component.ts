import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Tour {
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent {
  tours: Tour[] = [
  {
    nombre: 'Tour Histórico por Guayaquil',
    descripcion: 'Explora el Malecón 2000, el Barrio Las Peñas y el Parque Histórico.',
    precio: 40,
    imagenUrl: 'https://originalecuador.com/images/articles/tours/classic-tours/1-day-tours/guayaquil-city-parque-historico-tour/parque-historico-buildings-1.jpg'
  },
  {
    nombre: 'Recorrido en el Cerro Santa Ana',
    descripcion: 'Disfruta de una vista panorámica desde el Cerro Santa Ana.',
    precio: 30,
    imagenUrl: 'https://ec.viajandox.com/uploads/attractive_3370.jpg'
  },
  
  // Tours en Quito
  {
    nombre: 'Tour por el Centro Histórico de Quito',
    descripcion: 'Descubre las iglesias coloniales y plazas históricas de Quito.',
    precio: 50,
    imagenUrl: 'https://vistahermosa.ec/wp-content/uploads/2015/07/blog1_vista_hermosa_centro_quito_historico.jpg'
  },
 
  // Tours en Cuenca
  {
    nombre: 'Recorrido por el Centro Histórico de Cuenca',
    descripcion: 'Visita las catedrales, museos y el río Tomebamba.',
    precio: 35,
    imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGXZ-BV_UMdzBcp35yehS9Lbl5U7ScX4P0A&s'
  }
  ];

  reservarTour(tour: Tour) {
    alert(`Reservando: ${tour.nombre} - Precio: $${tour.precio}`);
    // Aquí puedes agregar la lógica real de reserva
  }
}