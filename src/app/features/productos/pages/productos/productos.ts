import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CartService, Producto } from '../carrito/cart.service';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './productos.html',
  styleUrls: ['./productos.scss']
})
export class Productos implements OnInit {
  // 🧾 Lista de productos
  lista = [
    {
      id: 1,
      nombre: 'Laptop',
      descripcion: 'Lenovo AMD RYZEN 7',
      imagen: 'https://i.otto.de/i/otto/f337070b-a38e-5135-8b62-53f79b4bc86e?h=520&w=551&sm=clamp&upscale=true&fmt=auto',
      categoria: 'Computadoras',
      precio: 2000,
      cantidad: 5
    },
    {
      id: 2,
      nombre: 'Procesador',
      descripcion: 'AMD RYZEN 7',
      imagen: 'https://media.falabella.com/falabellaPE/121388704_01/w=1500,h=1500,fit=pad',
      categoria: 'Componentes',
      precio: 800,
      cantidad: 3
    },
    {
      id: 3,
      nombre: 'ASUS',
      descripcion: 'ExpertBook',
      imagen: 'https://imgs.search.brave.com/RjSC-YxRlxUA6EjWnjVaxnubYr64ILGUYaSoYRMg_lw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kbGNk/bndlYmltZ3MuYXN1/cy5jb20vZ2Fpbi83/ODJhYmQ3OS1kZmI3/LTQwM2QtYmY3Ni03/ZTRhZjZiMDg0ZjAv/dzY5Mg',
      categoria: 'Computadoras',
      precio: 3500,
      cantidad: 10
    },
    {
      id: 4,
      nombre: 'Monitor',
      descripcion: 'LG 24MP400-B',
      imagen: 'https://sahuaperu.com.pe/wp-content/uploads/2023/12/LG-24MQ400-B-a.jpg',
      categoria: 'Perifericos',
      precio: 300,
      cantidad: 15
    },
    {
      id: 5,
      nombre: 'Tablet',
      descripcion: 'Samsung Galaxy Tab A8',
      imagen: 'https://www.peru-smart.com/wp-content/uploads/2024/05/TABL008GRIS-32GB.jpg',
      categoria: 'Tablets',
      precio: 400,
      cantidad: 8
    },
    {
      id: 6,
      nombre: 'Impresora',
      descripcion: 'HP LaserJet Pro M15w',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JfkrFdy8TkSsXBtysQak_Mf0G4ncOhVZEA&s',
      categoria: 'Perifericos',
      precio: 150,
      cantidad: 12
    },
    {
      id: 7,
      nombre: 'Teclado',
      descripcion: 'Logitech K120',
      imagen: 'https://imgs.search.brave.com/kfVxjsPbQc2aRPy-OsogAcX9p0eN6CduZxHws89xGcY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWVtb3J5a2luZ3Mu/cGUvZmlsZXMvMjAx/OC8xMS8xMy8yMzM2/Mi1NSzAwODcwOUIu/anBn',
      categoria: 'Perifericos',
      precio: 100,
      cantidad: 25
    },
    {
      id: 8,
      nombre: 'Mouse',
      descripcion: 'Logitech M185',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMrsPYWIr1iV5ImJ8p6mDg34Znrm5F3HizA&s',
      categoria: 'Perifericos',
      precio: 50,
      cantidad: 15
    }
  ];

  filtroBusqueda: string = '';
  categoriaSeleccionada: string = '';
  precioMaximo: number = 10000;
  categorias = ['Computadoras', 'Componentes', 'Perifericos', 'Tablets'];
  productosFiltrados = [...this.lista];

  // 👇 Inyecta el servicio en el constructor
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.actualizarFiltro();
  }

  actualizarFiltro() {
    const texto = this.filtroBusqueda.toLowerCase();
    this.productosFiltrados = this.lista.filter(item => {
      const coincideTexto = item.nombre.toLowerCase().includes(texto);
      const coincideCategoria =
        !this.categoriaSeleccionada || item.categoria === this.categoriaSeleccionada;
      const coincidePrecio = item.precio <= this.precioMaximo;
      return coincideTexto && coincideCategoria && coincidePrecio;
    });
  }

  // 🛒 NUEVO: agregar al carrito usando el servicio
  agregarAlCarrito(producto: Producto) {
    this.cartService.agregarProducto(producto);
    alert(`"${producto.nombre}" fue agregado al carrito 🛒`);
  }
}
