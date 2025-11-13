import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filtros.html',
  styleUrls: ['./filtros.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltrosComponent {
  @Input() categorias: string[] = [];
  @Output() filtroCambiado = new EventEmitter<{
    texto: string;
    categoria: string;
    precioMaximo: number;
  }>();

  filtroBusqueda = '';
  categoriaSeleccionada = '';
  precioMaximo = 10000;

  actualizarFiltro() {
    this.filtroCambiado.emit({
      texto: this.filtroBusqueda,
      categoria: this.categoriaSeleccionada,
      precioMaximo: this.precioMaximo
    });
  }
}
