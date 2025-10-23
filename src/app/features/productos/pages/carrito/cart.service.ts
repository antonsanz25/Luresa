import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: Producto[] = [];
  private carritoSubject = new BehaviorSubject<Producto[]>([]);

  carrito$ = this.carritoSubject.asObservable();

  agregarProducto(producto: Producto) {
    const existente = this.carrito.find(p => p.id === producto.id);
    if (existente) {
      existente.cantidad += 1;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
    this.actualizarCarrito();
  }

  obtenerCarrito() {
    return this.carrito;
  }

  actualizarCantidad(id: number, cantidad: number) {
    const producto = this.carrito.find(p => p.id === id);
    if (producto) {
      producto.cantidad = cantidad > 0 ? cantidad : 1;
      this.actualizarCarrito();
    }
  }

  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
    this.actualizarCarrito();
  }

  limpiarCarrito() {
    this.carrito = [];
    this.actualizarCarrito();
  }

  private actualizarCarrito() {
    this.carritoSubject.next([...this.carrito]);
  }
}
