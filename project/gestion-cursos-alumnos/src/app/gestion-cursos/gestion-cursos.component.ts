// src/app/gestion-cursos/gestion-cursos.component.ts
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
import { Curso } from '../models/curso.model';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GestionCursosModule } from './gestion-cursos.module';



@Component({
  selector: 'app-gestion-cursos',
  templateUrl: './gestion-cursos.component.html',
  styleUrls: ['./gestion-cursos.component.css']
})





export class GestionCursosComponent implements OnInit {
  cursos: Curso[] = [];
  showModal = false;
  isEditing = false;
  currentCurso: Curso = { id: 0, nombre: '', codigo: '' }; 

  constructor(private CursosService: CursosService) {}

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos(): void {
    this.CursosService.getCursos().subscribe(data => {
      this.cursos = data;
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
}