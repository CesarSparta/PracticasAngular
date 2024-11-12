import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VideojuegosComponent } from './videojuegos/videojuegos.component'
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { Configuracion } from './models/configuracion';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideojuegosComponent, CommonModule, ZapatillasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'Cesar esta aqui yeah';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;
  public config;

  constructor() {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(value: boolean) {
    this.mostrar_videojuegos = value;
  }
}
