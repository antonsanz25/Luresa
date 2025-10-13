import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CoreModule } from "../../../../core/core-module";

@Component({
  selector: 'app-home',
  imports: [
    MatIcon,
    CoreModule
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
