import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionCursosComponent } from './gestion-cursos/gestion-cursos.component';
import { GestionAlumnosComponent } from './gestion-alumnos/gestion-alumnos.component';
import { AsignacionCursosComponent } from './asignacion-cursos/asignacion-cursos.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/cursos', pathMatch: 'full' },
  { path: 'cursos', component: GestionCursosComponent },
  { path: 'alumnos', component: GestionAlumnosComponent },
  { path: 'inscripcion', component: AsignacionCursosComponent },
  { path: 'gestion-alumnos', component: GestionAlumnosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
