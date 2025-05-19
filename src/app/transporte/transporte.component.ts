import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Transporte {
  tipo: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
 destino:string;
}

@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent {
  transportes: Transporte[] = [
    {
      tipo: 'Vuelo Directo',
      descripcion: 'Para tu ruta específica desde tu ciudad, siendo un vuelo directo, se centrará en la eficiencia y la comodidad de llevarte directamente a tu destino sin las molestias de una escala..',
      precio:  45 ,
      imagenUrl: 'https://i0.wp.com/www.nlarenas.com/wp-content/uploads/aerolineas-cambios-vuelos-flexibilidad-Ecuador-LATAM-Avianca.jpg?fit=1280%2C720&ssl=1',
      destino:'Quito-Guayaquil-Cuenca'
    },
    {
      tipo: 'Bus Confort',
      descripcion: 'Proporciona una experiencia de viaje en autobús más cómoda y placentera en comparación con los servicios estándar. Esto se logra a través de diversas comodidades y características diseñadas para mejorar el bienestar del pasajero durante el trayecto..',
      precio: 10,
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmHXq-mqcq9jXj4cHdrsQi35uqKU7XEGY4Q&s',
      destino:'Guayaquil-Quito-Cuenca'
    },
    {
      tipo: 'Vanservices',
      descripcion: 'Ofrece transporte turístico y de pasajeros con una flota de vans, minibuses y buses. Sus servicios incluyen traslados, tours, viajes vacacionales a nivel nacional.',
      precio: 12,
      imagenUrl: 'https://www.vanservice.com.ec/portada/portada4.jpg',
      destino:'Guayaquil-Quito-Cuencas'
    }
  ];
  reservarTransporte(transporte: Transporte) {
    alert(`Reservando: ${transporte.tipo} - Precio: $${transporte.precio}`);
    
  }
}