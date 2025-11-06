import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActualizacion } from './detalle-actualizacion';

describe('DetalleActualizacion', () => {
  let component: DetalleActualizacion;
  let fixture: ComponentFixture<DetalleActualizacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleActualizacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleActualizacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
