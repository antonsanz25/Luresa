import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-agregado-carrito-modal',
  imports: [
    MatIcon
  ],
  templateUrl: './agregado-carrito-modal.html',
  styleUrl: './agregado-carrito-modal.scss'
})
export class AgregadoCarritoModal {
  constructor(
    public dialogRef: MatDialogRef<AgregadoCarritoModal>,
    @Inject(MAT_DIALOG_DATA) public data: { nombre: string}
  ){}

  cerrar(): void {
    this.dialogRef.close();
  }

  irAlCarrito(): void{
    this.dialogRef.close('verCarrito');
  }

}
