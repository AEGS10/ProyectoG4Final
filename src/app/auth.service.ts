import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private credenciales = { usuario: 'admin', clave: '1234' };
  public usuarioLogeado: string | null = null;

  login(usuario: string, clave: string): boolean {
    if (usuario === this.credenciales.usuario && clave === this.credenciales.clave) {
      this.usuarioLogeado = usuario;
      return true;
    }
    return false;
  }

  logout() {
    this.usuarioLogeado = null;
  }

  estaAutenticado(): boolean {
    return this.usuarioLogeado !== null;
  }

  getUsuario(): string | null {
    return this.usuarioLogeado;
  }
}

