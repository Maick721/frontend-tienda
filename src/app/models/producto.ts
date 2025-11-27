export class Producto {
 constructor(
    public _id:string,
    public marca:string,
    public modelo:string,
    public ram: string,
    public rom: string,
    public precio:number, 
    public imagen:string
 ){}
}