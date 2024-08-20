import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCursosComponent } from './gestion-cursos.component';

describe('GestionCursosComponent', () => {
  let component: GestionCursosComponent;
  let fixture: ComponentFixture<GestionCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
