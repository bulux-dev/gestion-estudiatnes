// src/app/gestion-cursos/gestion-cursos.component.ts
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
import { Curso } from '../models/curso.model';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GestionCursosModule } from './gestion-cursos.module';
import { Alumno } from '../models/alumno.model';
import { AlumnosService } from '../servicios/alumnos.service';
import { Asignacion } from '../models/asignacion.model';



@Component({
  selector: 'app-gestion-cursos',
  templateUrl: './gestion-cursos.component.html',
  styleUrls: ['./gestion-cursos.component.css']
})

export class GestionCursosComponent implements OnInit {
  cursos: Curso[] = [];
  alumnos: Alumno[] = [];
  showModal = false;
  isEditing = false;
  showAssignModal = false;
  currentCurso: Curso = { id: 0, nombre: '', codigo: '' }; 
  currentAlumno: Alumno = { id: 0, nombre: '', matricula: '' }; 
  currentAsignacion: Asignacion = {cursoId: 0, alumnoId: 0};

  constructor(private CursosService: CursosService, private AlumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.loadCursos();
    this.loadAlumnos();
  }

  loadCursos(): void {
    this.CursosService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }
  loadAlumnos(): void {
    this.AlumnosService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

  openAddCursosModal(): void {
    this.currentCurso = { id: 0, nombre: '', codigo: '' }; // Resetear el alumno actual para agregar uno nuevo
    this.isEditing = false;
    this.showModal = true;
  }

  openEditCursosModal(curso: Curso): void {
    this.currentCurso = { ...curso }; 
    this.isEditing = true;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  addCurso(): void {
    this.CursosService.addCurso(this.currentCurso).subscribe(() => {
      this.loadCursos();
      this.closeModal();
    });
  }

  updateCurso(): void {
    this.CursosService.updateCurso(this.currentCurso.id, this.currentCurso).subscribe(() => {
      this.loadCursos();
      this.closeModal();
    });
  }

  deleteCurso(id: number): void {
    this.CursosService.deleteCurso((id)).subscribe(() => {
      this.loadCursos();
    });
  }
  assignCurso(): void {
   
  }

  openAssignCursosModal(curso: Curso): void {
    console.log('hi')
    console.log('Alumnos: ',this.alumnos);
    console.log('Cursos: ',this.cursos);
    this.currentCurso = curso;
    this.currentAsignacion = { cursoId:this.currentCurso.id,alumnoId:0 }; // Resetear el alumno actual para agregar uno nuevo
    this.isEditing = false;
    this.showAssignModal = true;
  }

  
  editAssignCurso(): void {
    this.CursosService.addCurso(this.currentCurso).subscribe(() => {
      this.loadCursos();
      this.closeModal();
    });
  }

  asignarCurso(): void {
    const asignacion = {
      cursoId: this.currentAsignacion.cursoId,
      alumnoId: this.currentAsignacion.alumnoId
    };
    console.log('Datos enviado: ',asignacion);

    this.CursosService.asignarCurso(asignacion).subscribe(()=>{
      this.closeModal();
      this.loadCursos();
    },error =>{
      console.log('Error');
    })
  }

  

}