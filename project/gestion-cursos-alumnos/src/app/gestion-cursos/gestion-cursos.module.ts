import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCursosComponent } from './gestion-cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GestionCursosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule   , 
    FormsModule
  ]
})
export class GestionCursosModule { }