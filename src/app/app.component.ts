import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideojuegosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'Cesar esta aqui yeah';
}
