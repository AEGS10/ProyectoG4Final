import { AfterViewInit, Component,HostListener,OnInit } from '@angular/core';
import * as L from 'leaflet';

//Decoracion de iconos de leaflet con imagenes locales
const iconDefault = L.icon({
  iconUrl: 'assets/leaflet/marker-icon.png',
  iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
  shadowUrl: 'assets/leaflet/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-explorar',
  imports: [],
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.css'
})
export class ExplorarComponent implements OnInit,AfterViewInit{

  // Mapa
  private map: L.Map | undefined;

  private puntosTuristicos = [
    { nombre: 'Guayaquil', lat: -2.170998, lng: -79.922359 },
    { nombre: 'Salinas', lat: -2.2080, lng: -80.9650 },
    { nombre: 'Montañita', lat: -1.8300, lng: -80.7550 },
    { nombre: 'Quito', lat: -0.1807, lng: -78.4678 },
    { nombre: 'Cuenca', lat: -2.9006, lng: -79.0045 },
    { nombre: 'Baños de Agua Santa', lat: -1.3967, lng: -78.4244 },
    { nombre: 'Tena', lat: -0.9931, lng: -77.8124 },
    { nombre: 'Puyo', lat: -1.4900, lng: -78.0000 },
    { nombre: 'Reserva Cuyabeno', lat: 0.0167, lng: -76.2000 },
    { nombre: 'Puerto Ayora (Isla Santa Cruz)', lat: -0.7393, lng: -90.3518 },
    { nombre: 'Puerto Baquerizo Moreno (Isla San Cristóbal)', lat: -0.9010, lng: -89.6086 },
    { nombre: 'Isabela (Isla Isabela)', lat: -0.8303, lng: -91.0946 }
  ];

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
      // Inicializa el mapa
    this.map = L.map('mapa', {
      center: [-1.8312, -78.1834], // Centro de Ecuador
      zoom: 6
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.puntosTuristicos.forEach(punto => {
      L.marker([punto.lat, punto.lng])
        .addTo(this.map!)
        .bindPopup(`<strong>${punto.nombre}</strong>`);
    });
  }
  // Galeria
  ngAfterViewInit(): void {
    this.reveal(); // Ejecutar al cargar por primera vez
  }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.reveal();
  }

  private reveal(): void {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }
}
