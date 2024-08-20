// src/app/servicios/inscripciones.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscripcion } from '../models/inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  createInscripcion(nuevaInscripcion: Inscripcion) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/api/inscripciones';

  constructor(private http: HttpClient) {}

  getInscripciones(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(this.apiUrl);
  }

  addInscripcion(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http.post<Inscripcion>(this.apiUrl, inscripcion);
  }

  deleteInscripcion(cursoId: number, alumnoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cursoId}/${alumnoId}`);
  }
}
