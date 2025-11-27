import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  oferta: boolean;
  imagen: string;
}

@Component({
  selector: 'app-art1',
  imports: [],
  templateUrl: './art1.component.html',
  styleUrl: './art1.component.css'
})

export class Art1Component {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Arroz Súper Extra',
      descripcion: 'Presentación 5kg – Calidad garantizada',
      precio: 8.49,
      oferta: true,
      imagen: 'https://tse4.mm.bing.net/th/id/OIP.HP4yohvZ0ROiY_bmKl63SgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 2,
      nombre: 'Aceite de Girasol',
      descripcion: 'Botella 1L – Ideal para tus comidas',
      precio: 4.99,
      oferta: false,
      imagen: 'https://tse3.mm.bing.net/th/id/OIP.YIBaEIuR8n5S7tz_71h-xwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 3,
      nombre: 'Leche Entera',
      descripcion: 'Cartón 1L – Fresca y nutritiva',
      precio: 1.25,
      oferta: false,
      imagen: 'https://tse1.mm.bing.net/th/id/OIP.wjChC9dxzBoRVgbeLSfDkgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
    }
  ];
}