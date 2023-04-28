import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CRUD1Service {

  private baseUrl = environment.test; 

  constructor(private http: HttpClient) { }

  crearRegistro(registro: any) {
    console.log('llega al servicio');
    return this.http.post<any>(this.baseUrl, registro);
  }

  actualizarRegistro(id: number, registro: any) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, registro);
  }

  eliminarRegistro(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  obtenerRegistros() {
    return this.http.get<any[]>(this.baseUrl);
  }

  obtenerRegistroPorId(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
