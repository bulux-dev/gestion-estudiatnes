// src/app/servicios/inscripciones.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscripcion } from '../models/inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  private apiUrl = 'http://localhost:3000/api/inscripciones';

  constructor(private http: HttpClient) {}

  inscribirEstudiante(estudianteId: number, cursoId: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { estudiante_id: estudianteId, curso_id: cursoId });
  }
  obtenerEstudiantesPorCurso(cursoId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cursos/${cursoId}/estudiantes`);
  }
}