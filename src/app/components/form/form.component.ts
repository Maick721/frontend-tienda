import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/productos.service';
import { CargarService } from '../../services/cargar.service';
import { Producto } from '../../models/producto';
import { Global } from '../../services/global';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ProductoService, CargarService],
})
export class FormComponent implements OnInit {
  public titulo: string;
  public producto: Producto;
  public productoGuardar: Producto;
  public url: string;
  public archivosParaCargar: Array<File>;
  public status: string;
  public idGuardado: string;

  constructor(
    private _productoService: ProductoService,
    private _cargarService: CargarService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = "Crear Producto";
    this.url = Global.url;
    this.producto = new Producto('', '', '', '', '', 0, '');
    this.productoGuardar = new Producto('', '', '', '', '', 0, '');
    this.archivosParaCargar = [];
    this.status = "";
    this.idGuardado = "";
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.titulo = "Editar Producto";
        this.getProducto(id);
      }
    });
  }

  // Obtener producto por ID (para edición)
  getProducto(id: string) {
    this._productoService.getProducto(id).subscribe(
      (response: any) => {
        if (response.producto) {
          this.producto = response.producto;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // Guardar producto nuevo
  guardarProducto() {
    this._productoService.guardarProducto(this.productoGuardar).subscribe(
      (response: any) => {
        if (response.producto) {
          this.status = 'success';
          this.idGuardado = response.producto._id;
          if (this.archivosParaCargar && this.archivosParaCargar.length > 0) {
            this._cargarService.peticionRequest(
              Global.url + 'subir-imagen/' + this.idGuardado,
              [],
              this.archivosParaCargar,
              'imagen'
            ).then((result: any) => {
              console.log(result);
            }).catch((err: any) => {
              console.log(err);
            });
          }
        } else {
          this.status = 'error';
        }
      },
      (error: any) => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  // Actualizar producto existente
  actualizarProducto(form: NgForm) {
    this._productoService.updateProducto(this.producto).subscribe(
      (response: any) => {
        if (response.producto) {
          if (this.archivosParaCargar && this.archivosParaCargar.length > 0) {
            this._cargarService.peticionRequest(
              Global.url + 'subir-imagen/' + response.producto._id,
              [],
              this.archivosParaCargar,
              'imagen'
            ).then((result: any) => {
              this.productoGuardar = result.response;
              this.status = 'success';
              form.reset();
            }).catch((err: any) => {
              console.log(err);
              this.status = 'error';
            });
          } else {
            this.productoGuardar = response.producto;
            this.status = 'success';
            form.reset();
          }
        } else {
          this.status = 'error';
        }
      },
      (error: any) => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  // Subir archivos (imagen)
  subirArchivos() {
    if (this.archivosParaCargar && this.archivosParaCargar.length > 0) {
      this._cargarService.peticionRequest(
        Global.url + 'subir-imagen/' + this.idGuardado,
        [],
        this.archivosParaCargar,
        'imagen'
      ).then((result: any) => {
        console.log(result);
      }).catch((err: any) => {
        console.log(err);
      });
    }
  }

  // Evento de cambio de imagen
  imagenChangeEvent(archivoSeleccionado: any) {
    this.archivosParaCargar = <Array<File>>archivoSeleccionado.target.files;
  }
}