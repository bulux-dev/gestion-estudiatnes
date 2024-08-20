import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { GestionInscripcionesRoutingModule } from './';
import { GestionInscripcionesComponent } from './gestion-inscripciones.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    GestionInscripcionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
//    GestionInscripcionesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    GestionInscripcionesComponent
  ]
})
export class GestionInscripcionesModule { }
