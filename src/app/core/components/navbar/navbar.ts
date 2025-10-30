import { Component, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { CartService } from '../../../features/productos/pages/carrito/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatDividerModule,
  ]
})
export class Navbar implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Output() themeToggle = new EventEmitter<void>();

  cartCount = 0;

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // Suscribirse al carrito para contar productos
    this.cartService.carrito$.subscribe(items => {
      // Sumar todas las cantidades del carrito
      this.cartCount = items.reduce((acc, item) => acc + item.cantidad, 0);
    });
  }

  onSearch(query?: string) {
    const q = (query || '').trim();
    if (!q) return;
    this.sidenav?.close?.();
    this.router.navigate(['/productos'], { queryParams: { q } });
  }

  onThemeToggle() {
    this.themeToggle.emit();
  }

  toggleSidenav() {
    if (!this.sidenav) return;
    this.sidenav.toggle();
  }

  onSidenavClosed() {
    // placeholder si necesitas lógica al cerrar
  }
}
