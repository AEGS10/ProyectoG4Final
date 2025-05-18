import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegistrarsitioComponent } from '../registrarsitio/registrarsitio.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paginaprincipal',
  standalone: true,
  imports: [CommonModule,FormsModule,RegistrarsitioComponent],
  templateUrl: './paginaprincipal.component.html',
  styleUrl: './paginaprincipal.component.css'
})
export class PaginaPrincipalComponent {


  filtro = '';
  datos = [
    { id: 1, nombre: 'Mochila', categoria: 'Accesorio', precio: 60, stock: 300 },
    { id: 2, nombre: 'Camisetas', categoria: 'Vestimenta', precio: 20, stock: 400 },
    { id: 3, nombre: 'Sombreros Paja Toquilla', categoria: 'Vestimenta', precio: 20, stock: 500 },
    { id: 4, nombre: 'Ponchos', categoria: 'Vestimenta', precio: 40, stock: 566 },
    { id: 5, nombre: 'Chocolate Artesanal', categoria: 'Alimento', precio: 5, stock: 5000 },
  ];

  editarId: number | null = null;
  mostrarDialogo = false;
  datoEditando: any = {};

  get datosFiltrados() {
    return this.datos.filter(d => d.nombre.toLowerCase().includes(this.filtro.toLowerCase()));
  }
  insert() {
    this.editarId = null; // Marca que es un nuevo dato
    this.datoEditando = {
      id: this.generarNuevoId(),
      nombre: '',
      categoria: '',
      precio: 0,
      stock: 0
    };
    this.mostrarDialogo = true;
  }
  
  private generarNuevoId(): number {
    return this.datos.length > 0 ? Math.max(...this.datos.map(d => d.id)) + 1 : 1;
  }
  

  eliminar(id: number) {
    this.datos = this.datos.filter(d => d.id !== id);
  }

  modificar(dato: any) {
    this.editarId = dato.id;
    this.datoEditando = { ...dato };
    this.mostrarDialogo = true;
  }

  actualizarDatos(modificado: any) {
    const index = this.datos.findIndex(d => d.id === modificado.id);
  
    if (index !== -1) {
      // Si ya existe, modificar
      this.datos[index] = { ...modificado };
    } else {
      // Si no existe, agregar nuevo
      this.datos.push({ ...modificado });
    }
  
    this.mostrarDialogo = false;
  }
  

  cerrarDialogo() {
    this.mostrarDialogo = false;
  }
}

