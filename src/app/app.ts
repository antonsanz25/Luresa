import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from "./core/components/navbar/navbar";
import { Footer } from "./core/components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Navbar,
    Footer,
],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('PaginaWeb');

  // ✅ Estado de tema (inicia en claro)
  private isDark = false;

  // ✅ Método para alternar entre light y dark
  toggleTheme() {
    const body = document.body;

    if (this.isDark) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }

    this.isDark = !this.isDark;
  }
}

