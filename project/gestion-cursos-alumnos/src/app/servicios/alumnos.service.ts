// src/app/servicios/alumnos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.model';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private apiUrl = 'http://localhost:3000/api/alumnos';

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  addAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.apiUrl, alumno);
  }

  updateAlumno(id: number, alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.apiUrl}`, alumno);
  }

  deleteAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  obtenerAlumnosInscritos(cursoId: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/inscritos/${cursoId}`);
  }


}
