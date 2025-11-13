import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  imports: [
    MatIcon,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './detalle-productos.html',
  styleUrl: './detalle-productos.scss'
})
export class DetalleProductos {
  titulo = 'Venta de Productos Tecnológicos';
  subtitulo = 'Equipos, accesorios y licencias originales a precios competitivos.';
  imagen = 'https://ibo.pe/blog/wp-content/uploads/2020/01/pasarelas-de-pago.jpg';
  descripcion = `
    Ofrecemos una amplia gama de productos de tecnología de las marcas más reconocidas del mercado.
    Desde equipos de cómputo hasta accesorios especializados, garantizamos calidad, garantía y soporte posventa.
  `;
  caracteristicas = [
    'Computadoras, laptops y periféricos de alto rendimiento',
    'Licencias originales de software y sistemas operativos',
    'Componentes de hardware certificados',
    'Envíos seguros y facturación inmediata'
  ];
  beneficios = [
    'Precios competitivos y promociones exclusivas',
    'Garantía oficial en todos los productos',
    'Asesoría personalizada para empresas y particulares',
    'Soporte técnico postventa'
  ];
  confianza = `
    Trabajamos únicamente con distribuidores autorizados y marcas reconocidas.
    Nuestra misión es ofrecer soluciones confiables que impulsen la productividad de tu negocio o proyecto personal.
  `;
  // === NUEVA SECCIÓN: POR QUÉ ELEGIRNOS ===
  porqueElegirnos = {
    titulo: '¿Por qué elegirnos?',
    icono: 'local_shipping',
    descripcion: `
      En LURESA te ofrecemos solo productos originales, con garantía y soporte.
      Nuestra prioridad es tu confianza: desde la compra hasta la entrega y asistencia postventa.
    `,
    stats: [
      { valor: '+1200', texto: 'Ventas Realizadas' },
      { valor: '100%', texto: 'Productos Certificados' },
      { valor: '48h', texto: 'Entrega Garantizada' }
    ]
  };
}
