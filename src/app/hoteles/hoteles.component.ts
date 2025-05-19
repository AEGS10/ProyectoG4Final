import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Hotel {
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}
@Component({
  selector: 'app-hoteles',
  imports: [CommonModule],
  templateUrl: './hoteles.component.html',
  styleUrl: './hoteles.component.css'
})
export class HotelesComponent {
   hoteles: Hotel[] = [
    {
      nombre: 'Hotel Oro Verde Guayaquil',
      descripcion: 'Hotel Oro Verde es una opción de alojamiento de lujo en Guayaquil, ideal tanto para viajeros de negocios como para turistas que buscan una experiencia de hospedaje distinguida y con todas las comodidades..',
      precio: 50 ,
      imagenUrl: 'https://www.oroverdeguayaquil.com/wp-content/uploads/2021/06/oro-verde-guayaquil-hotel-01.jpg'
    },
    {
      nombre: 'Hotel Boutique Castilla de León Cuenca',
      descripcion: ' Hotel Boutique Castilla de León es una excelente opción para quienes buscan un alojamiento con encanto, tranquilo y con un servicio atento y personalizado en la hermosa ciudad de Cuenca. Su atmósfera única y su atención a los detalles lo convierten en un lugar especial para hospedarse.',
      precio: 65,
      imagenUrl: 'https://boutique-castilla-de-leon.allcuencahotels.com/data/Images/OriginalPhoto/4792/479263/479263800/image-cuenca-boutique-castilla-de-leon-hotel-99.JPEG'
    },
    {
      nombre: 'Hotel Selina Quito',
      descripcion: 'el Hotel Selina Quito es ideal para viajeros jóvenes, mochileros, nómadas digitales y cualquier persona que busque un lugar con estilo, ambiente social y la oportunidad de conocer a otros viajeros mientras explora la ciudad de Quito..',
      precio: 60,
      imagenUrl: 'https://limg.hostelsclub.com/pics/38838/038838-1552422571.jpg'
    }
  ];

  reservarHotel(hotel: Hotel) {
    alert(`Reservando: ${hotel.nombre} - Precio: $${hotel.precio}`);
    
  }
}
