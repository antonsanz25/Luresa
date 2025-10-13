import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-productos',
  imports: [
    MatCardModule,
    MatListItem,
    MatList
  ],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos {


}
