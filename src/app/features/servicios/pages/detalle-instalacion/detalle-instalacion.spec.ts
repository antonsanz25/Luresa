import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInstalacion } from './detalle-instalacion';

describe('DetalleInstalacion', () => {
  let component: DetalleInstalacion;
  let fixture: ComponentFixture<DetalleInstalacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleInstalacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleInstalacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
