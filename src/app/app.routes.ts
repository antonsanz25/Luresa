import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home-module').then((m) => m.HomeModule)
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./features/productos/productos-module').then((m) => m.ProductosModule)
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./features/servicios/servicios-module').then((m) => m.ServiciosModule)
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./features/contacto/contacto-module').then((m) => m.ContactoModule)
  },
  { path: '**', redirectTo: '' }
];
