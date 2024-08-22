// src/app/servicios/cursos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private apiUrl = 'http://localhost:3000/api/cursos';

  constructor(private http: HttpClient) {}

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  addCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  updateCurso(id: number, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/${id}`, curso);
  }

  deleteCurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}`);
  }
}
