import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../../services/productos.service';
import { CargarService } from '../../services/cargar.service';
import { Producto } from '../../models/producto';
import { Global } from '../../services/global';
import { ActivatedRoute, Router, Params, RouterModule } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-productos',
  imports: [RouterModule, HttpClientModule, NgFor, NgIf, CommonModule, FormsModule, FormComponent],
  standalone: true,
  providers: [ProductoService, CargarService],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  public productos: Producto[];
  public url: string;
  public producto: Producto;
  public confirm: boolean;
  public confirmProductoId: string;

  constructor(
    private _productoService: ProductoService,
    private _cargarService: CargarService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.productos = [];
    // Inicializamos el producto con valores vacíos o por defecto
    this.producto = new Producto('', '', '', '', '', 0, '');
    this.confirm = false;
    this.confirmProductoId = '';
  }

  ngOnInit(): void {
    this.getProductos();
    this._route.params.subscribe((params: Params) => {
      let id = params['id'];
      if (id) {
        console.log(id);
        this.getProducto(id);
      }
    });
  }

  getProductos() {
    this._productoService.getProductos().subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        if (response.productos) {
          this.productos = response.productos;
          console.log('Productos cargados:', this.productos);
        } else if (Array.isArray(response)) {
          // Si la respuesta es directamente un array
          this.productos = response;
          console.log('Productos cargados (array directo):', this.productos);
        }
      },
      error => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  getProducto(id: string) {
    this._productoService.getProducto(id).subscribe(
      response => {
        this.producto = response.producto;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  setConfirm(productoId: string, confirm: boolean) {
    this.confirmProductoId = productoId;
    this.confirm = confirm;
  }

  borrarProducto(id: string) {
    this._productoService.deleteProducto(id).subscribe(
      response => {
        if (response.producto) {
          this.confirm = false;
          this.confirmProductoId = '';
          this.getProductos();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}