import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-envios',
  imports: [],
  templateUrl: './detalle-envios.html',
  styleUrl: './detalle-envios.scss'
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

}
