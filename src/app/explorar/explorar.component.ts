import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { AuthService } from '../auth.service';  

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
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.css'
})
export class ExplorarComponent implements OnInit, AfterViewInit {

  private map: L.Map | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('mapa', {
      center: [-1.8312, -78.1834],
      zoom: 6
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.authService.obtenerPuntos().subscribe({
      next: (puntos: any[]) => {   // Aquí punto es any[] para evitar interfaz
        puntos.forEach(punto => {
          L.marker([punto.latitud, punto.longitud])
            .addTo(this.map!)
            .bindPopup(`<strong>${punto.nombre}</strong>`);
        });
      },
      error: err => {
        console.error('Error al cargar los puntos turísticos:', err);
      }
    });
  }

  ngAfterViewInit(): void {
    this.reveal();
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
