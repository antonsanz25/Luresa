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
    path: 'servicios',
    loadComponent: () =>
      import('./features/servicios/pages/servicios/servicios').then((m) => m.Servicios)
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
