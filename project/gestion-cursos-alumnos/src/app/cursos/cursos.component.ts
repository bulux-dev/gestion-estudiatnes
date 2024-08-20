import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCursos().then(response => {
      this.cursos = response.data;
    });
  }
}
