import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { Route, RouterLink } from "@angular/router";
import { ProductoService } from '../../services/productos.service';
import { FootComponent } from '../foot/foot.component';
import { Global } from '../../services/global';
import { Producto } from '../../models/producto';
import { NgForOf,NgIf } from '@angular/common';
import { ActivatedRoute, Router,Params,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  imports: [ NgIf, RouterLink, RouterModule, NgForOf],
   standalone:true,
   providers:[ProductoService],
  templateUrl: './productos.component.html',

  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  public productos: Producto[];
  public url: string;
  public producto: Producto;
  public confirm: boolean;

  constructor(
    private _productoService:ProductoService,
    private _router: Router,
    private _route: ActivatedRoute

  ){
    this.url=Global.url
    this.productos=[];
    this.producto= new Producto('', '','','','',1000,'');
    this.confirm =false;

  }
  ngOnInit(): void {
    this.getProductos();
    this._route.params.subscribe(params =>{
      let id= params['id'];
      if(id){
        console.log(id);
        this.getProducto(id);
      }
    });
  }
  getProductos(){
    this._productoService.getProductos().subscribe(
      response=> {
        if(response.productos){
          this.productos= response.productos;
        }
      },
      error=> {
        console.log(<any>error);
      }
    );
  }

  getProducto(id:String){
    this._productoService.getProducto(id).subscribe(
      response=>{
        this.producto= response.producto;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm:boolean){
    this.confirm= confirm;
  }

  borrarProducto(id:String){
    this._productoService.deleteProducto(id).subscribe(
      response=> {
        if(response.producto){
          this._router.navigate(['../productos']);
        }
      },
      error=> {
        console.log(<any>error);
      }
    );
  }
}
