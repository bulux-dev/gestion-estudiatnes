import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AsignacionCursosModule } from './asignacion-cursos.module';

//const cors = require('cors');
//app.use(cors());
@Component({
  selector: 'app-asignacion-cursos',
  templateUrl: './asignacion-cursos.component.html',
  styleUrls: ['./asignacion-cursos.component.css']
})
export class AsignacionCursosComponent implements OnInit {
  cursos: any[] = []; 
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/cursos') 
      .subscribe(data => {
        this.cursos = data;
      });
  }
}
