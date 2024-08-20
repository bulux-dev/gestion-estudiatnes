import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000'; // URL de backend

  constructor() { }

  // Obtener todos los cursos
  getCursos() {
    return axios.get(`${this.baseUrl}/cursos`);
  }

  // Obtener todos los alumnos
  getAlumnos() {
    return axios.get(`${this.baseUrl}/alumnos`);
  }

  // Inscribir un alumno a un curso
  inscribirAlumno(cursoId: number, alumnoId: number) {
    return axios.post(`${this.baseUrl}/inscripciones`, { cursoId, alumnoId });
  }

  // Eliminar inscripción
  eliminarInscripcion(cursoId: number, alumnoId: number) {
    return axios.delete(`${this.baseUrl}/inscripciones/${cursoId}/${alumnoId}`);
  }
}
