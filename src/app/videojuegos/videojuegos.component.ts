import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [],
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css'
})
export class VideojuegosComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;

  constructor() {
    this.titulo = "Componente del videojuego";
    this.listado = "Listado de videojuegos";
  }

  ngOnInit() {
    console.log("OnInit Ejecutado");
  }

  ngDoCheck() {
    console.log("Docheck ejecutado");
  }

  ngOnDestroy() {
    console.log("OnDestroy ejecutado");
  }
  cambiarTitulo() {
    this.titulo = "Aqui se agregó el boton"
  }
}
