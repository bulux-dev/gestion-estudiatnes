// src/app/gestion-alumnos/gestion-alumnos.component.ts
import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../servicios/alumnos.service';
import { Alumno } from '../models/alumno.model';
import { GestionAlumnosModule } from './gestion-alumnos.module';


@Component({
  selector: 'app-gestion-alumnos',
  templateUrl: './gestion-alumnos.component.html',
  styleUrls: ['./gestion-alumnos.component.css']
})
export class GestionAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];
  showModal = false;
  isEditing = false;
  currentAlumno: Alumno = { id: 0, nombre: '', matricula: '' }; 

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.loadAlumnos();
  }

  loadAlumnos(): void {
    this.alumnosService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

  openAddAlumnoModal(): void {
    this.currentAlumno = { id: 0, nombre: '', matricula: '' }; // Resetear el alumno actual para agregar uno nuevo
    this.isEditing = false;
    this.showModal = true;
  }

  openEditAlumnoModal(alumno: Alumno): void {
    this.currentAlumno = { ...alumno }; 
    this.isEditing = true;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  addAlumno(): void {
    this.alumnosService.addAlumno(this.currentAlumno).subscribe(() => {
      this.loadAlumnos();
      this.closeModal();
    });
  }

  updateAlumno(): void {
    this.alumnosService.updateAlumno(this.currentAlumno.id, this.currentAlumno).subscribe(() => {
      this.loadAlumnos();
      this.closeModal();
    });
  }

  deleteAlumno(id: number): void {
    this.alumnosService.deleteAlumno(id).subscribe(() => {
      this.loadAlumnos();
    });
  }
}