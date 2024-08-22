import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { GestionCursosComponent } from './gestion-cursos/gestion-cursos.component';
import { GestionAlumnosComponent } from './gestion-alumnos/gestion-alumnos.component';
import { GestionInscripcionesComponent } from './gestion-inscripciones/gestion-inscripciones.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      AppComponent,
      GestionCursosComponent
    ],
    imports: [
      BrowserModule,
      FormsModule, // Asegúrate de importar FormsModule aquí
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }