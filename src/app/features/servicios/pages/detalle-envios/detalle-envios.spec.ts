import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEnvios } from './detalle-envios';

describe('DetalleEnvios', () => {
  let component: DetalleEnvios;
  let fixture: ComponentFixture<DetalleEnvios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleEnvios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEnvios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
