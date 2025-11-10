import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-actualizacion',
  imports: [],
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

}
