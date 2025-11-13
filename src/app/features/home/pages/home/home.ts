import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CoreModule } from "../../../../core/core-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatIcon,
    CoreModule,
    RouterLink
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
