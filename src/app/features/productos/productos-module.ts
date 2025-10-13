import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductosRoutingModule,
  ]
})
export class ProductosModule {
  productos = [
    { nombre: 'Laptop', descripcion: 'Lenovo AMD RYZEN 7', precio: '$2000', cantidad: '5' },
    { nombre: 'Procesador', descripcion: 'AMD RYZEN 7', precio: '$800', cantidad: '3' },
    { nombre: 'ASUS', descripcion: 'ExpertBook', precio: '$3500', cantidad: '10' }
  ];
 }
