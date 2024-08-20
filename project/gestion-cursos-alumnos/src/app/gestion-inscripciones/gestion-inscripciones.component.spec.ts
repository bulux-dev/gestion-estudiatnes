import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscripcionesComponent } from './gestion-inscripciones.component';

describe('GestionInscripcionesComponent', () => {
  let component: GestionInscripcionesComponent;
  let fixture: ComponentFixture<GestionInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionInscripcionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
