import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ necesario para *ngIf
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { VarPublicService } from '../varpublicservice';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';
  mensaje: string = '';

  constructor(
    private rutasPaginas: Router,
    private varPublic: VarPublicService,
    private auth: AuthService,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  iniciarsesion() {
    this.auth.login(this.usuario, this.clave).subscribe({
      next: (data: any) => {
        sessionStorage.setItem('usuario', data.usuario);
        this.varPublic.logeado$.next(true);
        this.rutasPaginas.navigate(['/paginaprincipal']);
        this.dialogRef.close();
      },
      error: () => {
        this.mensaje = '¡Credenciales incorrectas!';
      }
    });
  }
}

