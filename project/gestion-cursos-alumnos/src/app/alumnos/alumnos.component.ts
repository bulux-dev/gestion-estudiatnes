import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAlumnos().then(response => {
      this.alumnos = response.data;
    });
  }
}
