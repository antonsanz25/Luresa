import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-soporte',
  imports: [],
  templateUrl: './detalle-soporte.html',
  styleUrl: './detalle-soporte.scss'
})
export class DetalleSoporte {
  titulo = 'Soporte Técnico Integral';
  subtitulo = 'Soluciones efectivas para el mantenimiento y diagnóstico de tus sistemas.';
  imagen = 'https://universidadeuropea.com/resources/media/images/soporte-tecnico-800x450.original.jpg';
  descripcion = `
    Nuestro servicio de soporte técnico ofrece asistencia remota o presencial para resolver
    cualquier incidencia relacionada con tus equipos informáticos o software.
  `;
  caracteristicas = [
    'Diagnóstico y reparación de equipos',
    'Asistencia remota en tiempo real',
    'Mantenimiento preventivo y correctivo',
    'Optimización de rendimiento del sistema'
  ];
  beneficios = [
    'Reducción de tiempos de inactividad',
    'Soporte especializado por técnicos certificados',
    'Respuesta rápida y atención personalizada',
    'Planes de mantenimiento ajustados a tus necesidades'
  ];
  confianza = `
    Nuestro equipo técnico está compuesto por profesionales con amplia experiencia en TI,
    garantizando un servicio ágil, seguro y confiable para empresas y usuarios finales.
  `;

}
