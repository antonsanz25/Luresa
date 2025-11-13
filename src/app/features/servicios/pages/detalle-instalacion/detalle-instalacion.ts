import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-instalacion',
  imports: [
    MatIcon,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './detalle-instalacion.html',
  styleUrl: './detalle-instalacion.scss'
})
export class DetalleInstalacion {
  titulo = 'Instalación y Configuración de Software';
  subtitulo = 'Deja en manos expertas la implementación de tus sistemas.';
  imagen = 'https://i.ytimg.com/vi/FhPtZm3_hBw/maxresdefault.jpg';
  descripcion = `
    Nos encargamos de la instalación, configuración y activación de sistemas operativos,
    aplicaciones empresariales y software especializado.
  `;
  caracteristicas = [
    'Instalación de Windows, Linux y macOS',
    'Configuración de Office, antivirus y software empresarial',
    'Licenciamiento y activación legal',
    'Creación y gestión de usuarios y redes'
  ];
  beneficios = [
    'Evita errores de instalación o activación',
    'Configuraciones personalizadas según tu entorno',
    'Actualizaciones y soporte técnico incluidos',
    'Garantía de funcionamiento óptimo'
  ];
  confianza = `
    Aseguramos instalaciones limpias, legales y estables,
    siguiendo buenas prácticas de TI y seguridad informática.
  `;

  // === NUEVA SECCIÓN: POR QUÉ ELEGIRNOS ===
  porqueElegirnos = {
    titulo: '¿Por qué elegirnos?',
    icono: 'verified',
    descripcion: `
      En LURESA nos especializamos en instalaciones seguras, legales y optimizadas.
      Adaptamos cada entorno según las necesidades del cliente, garantizando estabilidad,
      seguridad y rendimiento a largo plazo.
    `,
    stats: [
      { valor: '+800', texto: 'Instalaciones completadas' },
      { valor: '98%', texto: 'Satisfacción de clientes' },
      { valor: '24/7', texto: 'Soporte dsiponible' }
    ]
  };
}
