import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-actualizacion',
  imports: [
    MatIcon,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './detalle-actualizacion.html',
  styleUrl: './detalle-actualizacion.scss'
})
export class DetalleActualizacion {

  titulo = 'Actualización de Hardware';
  subtitulo = 'Potencia el rendimiento de tus equipos sin reemplazarlos.';
  imagen = 'https://www.crucial.com/content/dam/ballistix/brand-assets/photography/builds/team-ballistix-memorial-pc-build/041019_Ballistix_Team_Ballistix_Memorial_Build_Image_02.PSD.transform/medium-jpg/img.jpg';
  descripcion = `
    Mejoramos el rendimiento de tus equipos mediante la actualización de componentes clave.
    Ideal para quienes buscan más velocidad, capacidad y estabilidad sin invertir en equipos nuevos.
  `;
  caracteristicas = [
    'Ampliación de memoria RAM y almacenamiento SSD',
    'Actualización de tarjeta gráfica o CPU',
    'Optimización de sistemas de refrigeración',
    'Instalación de nuevos periféricos'
  ];
  beneficios = [
    'Rendimiento superior con menor inversión',
    'Mayor compatibilidad y estabilidad',
    'Mejor aprovechamiento del hardware existente',
    'Aumento de la vida útil del equipo'
  ];
  confianza = `
    Analizamos las especificaciones de tu sistema para ofrecerte actualizaciones seguras y compatibles,
    utilizando componentes de calidad y garantizando un rendimiento optimizado.
  `;
  // === NUEVA SECCIÓN: POR QUÉ ELEGIRNOS ===
  porqueElegirnos = {
    titulo: '¿Por qué elegirnos?',
    icono: 'verified',
    descripcion: `
      En LURESA destacamos por nuestro compromiso con la excelencia logística,
      ofreciendo soluciones confiables que garantizan entregas seguras y clientes satisfechos.
      Nos diferenciamos por la tecnología, la atención personalizada y la pasión por hacer las cosas bien.
    `,
    stats: [
      { valor: '+500', texto: 'Actualizaciones exitosas' },
      { valor: '99%', texto: 'Compatibilidad garantizada' },
      { valor: '100%', texto: 'Clientes Satisfechos' }
    ]
  };

}
