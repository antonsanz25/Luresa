import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSoporte } from './detalle-soporte';

describe('DetalleSoporte', () => {
  let component: DetalleSoporte;
  let fixture: ComponentFixture<DetalleSoporte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSoporte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleSoporte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
