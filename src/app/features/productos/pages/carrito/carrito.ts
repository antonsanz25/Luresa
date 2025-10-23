import { Component, OnInit } from '@angular/core';
import { CartService, Producto } from './cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class Carrito implements OnInit {

  carrito: Producto[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Nos suscribimos a los cambios del carrito
    this.cartService.carrito$.subscribe(items => {
      this.carrito = items;
    });
  }

  eliminarDelCarrito(id: number) {
    this.cartService.eliminarProducto(id);
  }

  actualizarCantidad(producto: Producto) {
    this.cartService.actualizarCantidad(producto.id, producto.cantidad);
  }

  calcularTotal(): number {
    return this.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }

  procederAlPago() {
    // Aquí puedes redirigir a una página de checkout o mostrar un diálogo
    alert('Función de pago próximamente 🚀');
  }
}
