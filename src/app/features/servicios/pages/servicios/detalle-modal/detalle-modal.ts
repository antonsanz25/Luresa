import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

export interface DetalleModalData {
  titulo: string;
  descripcion: string;
  detalles: string[];
  imagen?: string;
  ruta?: string;
}

@Component({
  selector: 'app-detalle-modal',
  standalone: true,
  imports: [
    MatIcon,
    MatDivider,
    MatButton,
    RouterLink,
  ],
  templateUrl: './detalle-modal.html',
  styleUrls: ['./detalle-modal.scss']
})
export class DetalleModal {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DetalleModalData,
    private dialogRef: MatDialogRef<DetalleModal>
  ) {}

  cerrar() {
    this.dialogRef.close();
  }
}
