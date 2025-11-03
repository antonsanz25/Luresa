import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  imports: [],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.scss'
})
export class DetalleProducto {

  constructor(
    public dialogRef: MatDialogRef<DetalleProducto>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrar(): void{
    this.dialogRef.close();
  }

}
