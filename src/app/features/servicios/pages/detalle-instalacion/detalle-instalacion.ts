import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-instalacion',
  imports: [],
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

}
