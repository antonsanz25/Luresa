import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregadoCarritoModal } from './agregado-carrito-modal';

describe('AgregadoCarritoModal', () => {
  let component: AgregadoCarritoModal;
  let fixture: ComponentFixture<AgregadoCarritoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregadoCarritoModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregadoCarritoModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
