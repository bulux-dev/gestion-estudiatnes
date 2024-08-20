// src/app/models/inscripcion.model.ts
import { Curso } from './curso.model';
import { Alumno } from './alumno.model';

export interface Inscripcion {
  id: number;
  cursoId: number;
  alumnoId: number;
  curso?: Curso;
  alumno?: Alumno;
}
