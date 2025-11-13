import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CartService, Producto } from '../carrito/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgregadoCarritoModal } from '../../../../shared/components/agregado-carrito-modal/agregado-carrito-modal';
import { Router } from '@angular/router';

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
    private dialog: MatDialog,
    private router: Router
  ) {}

  cerrar(): void{
    this.dialogRef.close();
  }

  agregarAlCarrito(producto: Producto) {
    this.cartService.agregarProducto(producto);
    const dialogRef = this.dialog.open(AgregadoCarritoModal, {
      width: '400px',
      data: { producto }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'verCarrito') {
        this.router.navigate(['/carrito']);
      }
    });
  }
}
