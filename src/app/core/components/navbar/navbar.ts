import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
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
export class Navbar {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Output() themeToggle = new EventEmitter<void>();
  cartCount = 0;

  constructor(private router: Router) {}

  onSearch(query?: string) {
    const q = (query || '').trim();
    if (!q) return;
    this.sidenav?.close?.();
    this.router.navigate(['/productos'], { queryParams: { q } });
  }

  onThemeToggle() {
    this.themeToggle.emit();
  }

  // abrir/cerrar con seguridad
  toggleSidenav() {
    if (!this.sidenav) return;
    this.sidenav.toggle();
  }

  onSidenavClosed() {
    // placeholder si necesitas lógica al cerrar
  }
}
