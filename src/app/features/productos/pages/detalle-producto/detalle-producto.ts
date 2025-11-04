import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CartService, Producto } from '../carrito/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalle-producto',
  imports: [],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.scss'
})
export class DetalleProducto {

  constructor(
    public dialogRef: MatDialogRef<DetalleProducto>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  cerrar(): void{
    this.dialogRef.close();
  }

  agregarAlCarrito(producto: Producto) {
      this.cartService.agregarProducto(producto);

      // Abrir el Snackbar (similar a un modal, pero más ligero)
      this.snackBar.open(
        `!Listo¡"${producto.nombre}" fue agregado al carrito 🛒`, // Mensaje
        'Ver Carrito', // Acción (botón en el snackbar)
        {
          duration: 3500, // Duración de 3 segundos
          horizontalPosition: 'center', // Posición a la derecha
          verticalPosition: 'top', // Posición en la parte superior
          panelClass: ['snackbar-moderno'] // Clase CSS personalizada para estilos
        }
      ).onAction().subscribe(() => {
        // Lógica para cuando el usuario hace clic en 'Ver Carrito'
        // Por ejemplo: this.router.navigate(['/carrito']);
        console.log('Navegar al carrito');
      });
    }
}
