import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { GestionAlumnosRoutingModule } from './gestion-alumnos-routing.module';
import { GestionAlumnosComponent } from './gestion-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    GestionAlumnosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   // GestionAlumnosRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    GestionAlumnosComponent
  ]
})
export class GestionAlumnosModule { }
