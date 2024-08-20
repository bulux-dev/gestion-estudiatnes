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
  cursos: any[] = [];  // Inicializa la variable para almacenar los cursos

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(
      (data: any[]) => {
        this.cursos = data;  // Asigna los datos a la variable de cursos
        console.log('Cursos:', this.cursos);  
      },
      (error) => {
        console.error('Error al obtener los cursos', error);  
      }
    );
  }
}