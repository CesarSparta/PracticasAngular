import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideojuegosComponent, ZapatillasComponent, CursosComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'Cesar esta aqui yeah';
  public mostrar_videojuegos: boolean = true;

  ocultarVideojuegos(value: boolean) {
    this.mostrar_videojuegos = value;
  }
}
