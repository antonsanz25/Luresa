import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home/home').then((m) => m.Home)
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./features/productos/pages/productos/productos').then((m) => m.Productos)
  },
  {
    path: 'detalle-producto/:id',
    loadComponent: () =>
      import('./features/productos/pages/detalle-producto/detalle-producto').then((m) => m.DetalleProducto)
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./features/servicios/pages/servicios/servicios').then((m) => m.Servicios)
  },
  {
    path: 'servicios/detalle-soporte',
    loadComponent: () =>
      import('./features/servicios/pages/detalle-soporte/detalle-soporte').then((m) => m.DetalleSoporte)
  },
  {
    path: 'servicios/detalle-productos',
    loadComponent: () =>
      import('./features/servicios/pages/detalle-productos/detalle-productos').then((m) => m.DetalleProductos)
  },
  {
    path: 'servicios/detalle-envios',
    loadComponent: () =>
      import('./features/servicios/pages/detalle-envios/detalle-envios').then((m) => m.DetalleEnvios)
  },
  {
    path: 'servicios/detalle-reparacion',
    loadComponent: () =>
      import('./features/servicios/pages/detalle-reparacion/detalle-reparacion').then((m) => m.DetalleReparacion)
  },
  {
    path:'servicios/detalle-instalacion',
    loadComponent: () =>
      import('./features/servicios/pages/detalle-instalacion/detalle-instalacion').then((m) => m.DetalleInstalacion)
  },
  {
    path:'servicios/detalle-actualizacion',
    loadComponent: () =>
      import('./features/servicios/pages/detalle-actualizacion/detalle-actualizacion').then((m) => m.DetalleActualizacion)
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./features/contacto/pages/contacto/contacto').then((m) => m.Contacto)
  },
  {
    path: 'carrito',
    loadComponent: () =>
      import('./features/productos/pages/carrito/carrito').then((m) => m.Carrito)
  },
  { path: '**', redirectTo: '' }
];
