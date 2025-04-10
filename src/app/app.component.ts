import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AccueilComponent } from "./accueil/accueil.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccueilComponent, NavbarComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
  name = 'farid';
  age = 22;

  imgUrl = 'https://i.pinimg.com/736x/04/50/42/045042366496f99e211c1febcbe61e2a.jpg'
  altrrnative = 'error';
}
