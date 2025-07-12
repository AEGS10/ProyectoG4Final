import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7288/api/Usuario'; 
  private apiUrlPuntos = 'https://localhost:7288/api/PuntoTuristico';

  constructor(private http: HttpClient) {}

  login(usuario: string, clave: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, {
      usuario,
      clave
    });
  }

  obtenerPuntos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrlPuntos}/listar`);
  }
}


