import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Producto } from "../models/producto";
import { Observable } from "rxjs";
import { Global } from "../services/global";

@Injectable()
export class ProductoService {
    public url: string;
    constructor (
        private _http:HttpClient
    ){
        this.url= Global.url;

    }
    //ver informacionde todos los rpoductos 
    getProductos():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type' , 'application/json');
            return this._http.get(this.url+'productos',{headers:headers});
        
    }
    //guardar productos
    //http://localhost:3600/guardar-producto
    guardarProducto(producto:Producto):Observable<any>{
        let params=JSON.stringify(producto);
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'guardar-producto', params,{headers:headers});
    }
    //obetnerdatos
    //http://localhost:3600/producto/:id
    getProducto(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type' , 'application/json');
        return this._http.get(this.url+'producto/'+id,{headers:headers});
    }

    //actualizar datos de un producto
    //http://localhost:3600/producto/:id
     updateProducto(producto:Producto):Observable<any>{
        let params=JSON.stringify(producto);
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'producto/'+producto._id, params,{headers:headers});
    }

    //eliminar producto
    //http://localhost:3600/producto/:id
    deleteProducto(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type' , 'application/json');
        return this._http.delete(this.url+'producto/'+id,{headers:headers});
    }
}