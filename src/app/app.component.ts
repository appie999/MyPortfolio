import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
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
