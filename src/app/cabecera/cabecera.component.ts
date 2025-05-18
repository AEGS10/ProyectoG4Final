import { Component,inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { VarPublicService } from '../varpublicservice';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-cabecera',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule,CommonModule,RouterModule],
  templateUrl: './cabecera.component.html', 
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent implements OnInit{

  logeadoCabecera = false; 
  readonly dialog = inject(MatDialog);

  constructor (private varPublic: VarPublicService, private rutasPaginas : Router) {}

  ngOnInit() {
    //this.logeado=false //Tiene que ir a la TS service global y verificar la variable de LOGIN
    this.varPublic.logeado$.subscribe(data => {
      console.log (`Está logeado?:, ${data}`)
      this.logeadoCabecera = data;
    });
    
    // cerrarSesion() {
    //   // Llamar al método de logout del servicio
    //   this.varPublic.setLogeado(false);
    //   this.logeadoCabecera = false;
    //   console.log('Sesion Cerrada');
    // }
  }

  openDialogLogin()
  {
      const dialogRef = this.dialog.open(LoginComponent,{
        width: '100%',
        height: '100%', // Alto del 80% de la ventana
        maxWidth: '100%', // Máximo ancho permitido
        maxHeight: '100%', // Máximo alto permitido
        panelClass: 'custom-dialog-container'
        
      })
      //this.logeado=true// Tiene que ir a la TS service global y verificar la variable de LOGIN
    
  }

  cerrarsesion()
  {
    this.varPublic.logeado$.next(false); 
    this.rutasPaginas.navigate(['/']); //direccion del routes.ts

  }
}