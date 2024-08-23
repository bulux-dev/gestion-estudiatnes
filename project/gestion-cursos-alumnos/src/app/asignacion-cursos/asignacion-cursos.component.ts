import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AsignacionCursosModule } from './asignacion-cursos.module';
import { CursosService } from '../servicios/cursos.service';
import { Curso } from '../models/curso.model';
import { AlumnosService } from '../servicios/alumnos.service';
import { Alumno } from '../models/alumno.model';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

//const cors = require('cors');
//app.use(cors());
@Component({
  selector: 'app-asignacion-cursos',
  templateUrl: './asignacion-cursos.component.html',
  styleUrls: ['./asignacion-cursos.component.css']
})
export class AsignacionCursosComponent implements OnInit {
  cursos: any[] = []; 
  alumnosInscritos: any[] = [];
  selectedCursoId: number | null = null;
  todosAlumnos: any[]=[];
  currentAsignacion: any ={alumnoId: null};
  showAssignModal = false;

  constructor(
    private http: HttpClient, 
    private cursoService: CursosService,
    private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/cursos') 
      .subscribe(data => {
        this.cursos = data;
      });
  }
  verAlumnosInscritos(cursoId: number): void {
    this.http.get<any[]>(`http://localhost:3000/api/inscripciones/cursos/${cursoId}/estudiantes`)
      .subscribe(data => {
        console.log('Alumnos inscritos:', data);
        // Puedes mostrar los datos en un modal o en algún otro lugar
      }, error => {
        console.error('Error al obtener alumnos inscritos:', error);
      });
  }
  removerAlumno(cursoId: number): void {
    // Aquí puedes implementar una lógica para seleccionar un alumno para remover
    // Ejemplo: Obtener el ID del alumno desde una selección en la UI
    const alumnoId = prompt('Ingrese el ID del alumno a remover');

    if (alumnoId) {
      this.http.delete(`http://localhost:3000/api/inscripciones/curso/${cursoId}/alumno/${alumnoId}`)
        .subscribe(response => {
          console.log('Respuesta al remover alumno:', response);
          // Actualiza la lista de cursos si es necesario
        }, error => {
          console.error('Error al remover alumno:', error);
        });
    }
  }
  
  
}
