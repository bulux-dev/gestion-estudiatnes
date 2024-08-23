import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignacionCursosComponent } from './asignacion-cursos.component';
import { HttpClientModule } from '@angular/common/http'; // Necesario para hacer solicitudes HTTP
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AsignacionCursosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AsignacionCursosModule { }
