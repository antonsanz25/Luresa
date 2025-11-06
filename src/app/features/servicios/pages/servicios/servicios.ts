import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalleModal, DetalleModalData } from './detalle-modal/detalle-modal';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-servicios',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardActions
  ],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.scss']
})
export class Servicios {
  // Array completo de servicios
  servicios: DetalleModalData[] = [
    {
      titulo: 'Venta de productos',
      descripcion: 'Productos de calidad y a buen precio.',
      detalles: [
        'Equipos de cómputo, accesorios y repuestos',
        'Licencias originales de software',
        'Precios competitivos y promociones'
      ],
      ruta: '/productos',
      imagen: 'https://ibo.pe/blog/wp-content/uploads/2020/01/pasarelas-de-pago.jpg'
    },
    {
      titulo: 'Soporte Técnico',
      descripcion: 'Asistencia personalizada en cada compra o instalación.',
      detalles: [
        'Atención remota o presencial',
        'Diagnóstico de fallas y soluciones',
        'Guía en tiempo real'
      ],
      ruta: '/soporte',
      imagen: 'https://universidadeuropea.com/resources/media/images/soporte-tecnico-800x450.original.jpg'
    },
    {
      titulo: 'Envíos Seguros',
      descripcion: 'Entregas rápidas y confiables.',
      detalles: [
        'Cobertura local y nacional',
        'Empaque seguro y rastreo en tiempo real',
        'Garantía de recepción'
      ],
      ruta: '/envios',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUgvo1g3o-Li4ZPd_HOPj7REHl2cmPDLxaQ&s'
    },
    {
      titulo: 'Reparación de Hardware',
      descripcion: 'Dejamos como nuevos tus productos.',
      detalles: [
        'Cambio de partes dañadas',
        'Limpieza interna y mantenimiento',
        'Diagnóstico completo'
      ],
      ruta: '/reparacion',
      imagen: 'https://www.infouni.uni.edu.pe/storage/programas/qcnslEFNliUtvbnuqIjSrQ5E5KCQmpBxev7xVKz0.jpg'
    },
    {
      titulo: 'Instalación de Software',
      descripcion: 'Instalación y configuración de sistemas operativos y software.',
      detalles: [
        'Windows, Linux, Office, antivirus, etc.',
        'Configuración de redes y usuarios',
        'Activación y licenciamiento'
      ],
      ruta: '/instalacion',
      imagen: 'https://i.ytimg.com/vi/FhPtZm3_hBw/maxresdefault.jpg'
    },
    {
      titulo: 'Actualización de Hardware',
      descripcion: 'Mejoramos el rendimiento de tus equipos.',
      detalles: [
        'Ampliación de memoria RAM y SSD',
        'Actualización de tarjeta gráfica o CPU',
        'Instalación de nuevos periféricos'
      ],
      ruta: '/actualizacion',
      imagen: 'https://www.crucial.com/content/dam/ballistix/brand-assets/photography/builds/team-ballistix-memorial-pc-build/041019_Ballistix_Team_Ballistix_Memorial_Build_Image_02.PSD.transform/medium-jpg/img.jpg'
    }
  ];

  constructor(private dialog: MatDialog) {}

  // Abrir modal con los datos del servicio
  openDetalleModal(servicio: DetalleModalData) {
    this.dialog.open(DetalleModal, {
      width: '620px',
      data: servicio,
      panelClass: 'custom-modal'
    });
  }
}
