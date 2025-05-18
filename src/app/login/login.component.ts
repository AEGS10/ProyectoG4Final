import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { VarPublicService } from '../varpublicservice'; 
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
    usuario: string = '';
    clave: string = '';
    mensaje: string = '';
  // usuarioLogin = {Cedula: "", Password: "", Transaccion: ""};
    // this.usuarioLogin.value.Cedula = this.cedula.value;
    // this.usuarioLogin.value.Password = this.clave.value;
    // this.usuarioLogin.value.Transaccion = "CONSULTAR_USUARIO_CLAVE"
  
  constructor (private rutasPaginas : Router, private varPublic: VarPublicService, private dialogRef: MatDialogRef<LoginComponent>){}
  iniciarsesion()
  {
    
    if (this.usuario === 'admin' && this.clave === '1234') {
      this.mensaje = '';
      this.rutasPaginas.navigate(['/paginaprincipal']);
      this.varPublic.logeado$.next(true);
    } else {
      this.mensaje = 'Credenciales incorrectas';
    }
    // this.rutasPaginas.navigate(['/pagePrincipal']); //direccion del routes.ts
    this.dialogRef.close(); // se cierra el cuadro
  }  

    // this.loginservice.login(this.usuarioLogin).subscribe((data:any)=> {

    //   if (data == "Error Credenciales")
    //   {
    //     alert ("Error en las credenciales de acceso")
    //   }
    //   else{
    //     this.miServicioEjecutor.logeado$.next(true);
    //     localStorage.setItem('token_value', data);
    //     this.router.navigate(['/pagePrincipal']);
    //     this.dialogRef.close();
    //   }
    // },
    // (errorData)=> alert (errorData.error))

}
