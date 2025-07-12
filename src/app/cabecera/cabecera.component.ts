import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { VarPublicService } from '../varpublicservice';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, CommonModule, RouterModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent implements OnInit {

  logeadoCabecera = false;
  readonly dialog = inject(MatDialog);
  nombreUsuario: string = '';

  constructor(private varPublic: VarPublicService, private rutasPaginas: Router) {}

  ngOnInit() {
  this.varPublic.logeado$.subscribe(data => {
    this.logeadoCabecera = data;

    if (data) {
      const usuarioGuardado = sessionStorage.getItem('usuario');
      this.nombreUsuario = usuarioGuardado ? usuarioGuardado.toUpperCase() : '';
    } else {
      this.nombreUsuario = ''; 
    }
  });
}


  openDialogLogin() {
    this.dialog.open(LoginComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      panelClass: 'custom-dialog-container',
    });
  }

  cerrarsesion() {
    sessionStorage.removeItem('usuario'); 
    this.varPublic.logeado$.next(false);
    this.rutasPaginas.navigate(['/']);
  }
}
