import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-reparacion',
  imports: [],
  templateUrl: './detalle-reparacion.html',
  styleUrl: './detalle-reparacion.scss'
})
export class DetalleReparacion {
  titulo = 'Reparación de Hardware Profesional';
  subtitulo = 'Recupera el rendimiento y vida útil de tus dispositivos.';
  imagen = 'https://www.infouni.uni.edu.pe/storage/programas/qcnslEFNliUtvbnuqIjSrQ5E5KCQmpBxev7xVKz0.jpg';
  descripcion = `
    Ofrecemos servicios de diagnóstico, reparación y mantenimiento de equipos de cómputo y periféricos.
    Utilizamos herramientas especializadas y repuestos originales.
  `;
  caracteristicas = [
    'Cambio de componentes dañados',
    'Reparación de placas base, fuentes y pantallas',
    'Limpieza profunda y mantenimiento preventivo',
    'Optimización térmica y de rendimiento'
  ];
  beneficios = [
    'Extiende la vida útil de tus equipos',
    'Reducción de costos frente a una compra nueva',
    'Diagnóstico gratuito y presupuestos sin compromiso',
    'Garantía por reparación realizada'
  ];
  confianza = `
    Nuestro laboratorio técnico cuenta con equipamiento avanzado y técnicos certificados
    que aseguran una reparación eficiente y de calidad.
  `;

}
