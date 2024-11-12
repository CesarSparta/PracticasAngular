import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zapatillas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zapatillas.component.html',
  styleUrl: './zapatillas.component.css'
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = "Componente de zapatillas";
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [new Zapatilla('clasic', 'rebook', 'blanco', 80, true),
    new Zapatilla('clasic', 'nike', 'blanco', 60, true),
    new Zapatilla('clasic', 'puma', 'blanco', 90, false)];
  }

  ngOnInit() {
    console.log('Antes del console.log de zapatillas'); // Punto de interrupción aquí
    console.log(this.zapatillas);
  }
}
