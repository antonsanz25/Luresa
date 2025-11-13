import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-detalle-envios',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterLink],
  templateUrl: './detalle-envios.html',
  styleUrls: ['./detalle-envios.scss']
})
export class DetalleEnvios {
  titulo = 'Envíos Seguros y Confiables';
  subtitulo = 'Llevamos tus productos a destino con la máxima seguridad y rapidez.';
  imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUgvo1g3o-Li4ZPd_HOPj7REHl2cmPDLxaQ&s';

  descripcion = `
    Contamos con una red logística eficiente para garantizar entregas seguras a nivel local y nacional.
    Cada pedido se embala cuidadosamente y se rastrea en tiempo real.
  `;

  caracteristicas = [
    'Cobertura en todo el territorio nacional',
    'Empaque seguro y resistente',
    'Rastreo del envío en línea',
    'Entrega garantizada en tiempo y forma'
  ];

  beneficios = [
    'Tranquilidad total durante el transporte',
    'Comunicación constante con el cliente',
    'Atención al cliente 24/7',
    'Seguro de envío disponible'
  ];

  confianza = `
    Colaboramos con operadores logísticos certificados para garantizar que cada entrega llegue
    en perfectas condiciones y dentro del plazo acordado.
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
      { valor: '+1000', texto: 'Entregas exitosas' },
      { valor: '98%', texto: 'Satisfacción de clientes' },
      { valor: '24/7', texto: 'Soporte operativo' }
    ]
  };
}
