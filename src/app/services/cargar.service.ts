import { Injectable } from "@angular/core";
import {Global} from "../services/global";

@Injectable({
    providedIn: 'root'
})
export class CargarService{
    public url:string;

    constructor(){
        this.url=Global.url;
    }
    /*metodo para hacerunapeticion ajax para adjuntar un archivo pasamos alurl , los posibles paramnetros 
    en este caso array de tipo string, un array de archivos y el nombre del archivo de tipo string*/
    
    peticionRequest(url:string,params: Array<string>, files: Array<File>, name: string){
        /*esto retorna unapromesa que tiene un resolve:cuandop se ha resultado y reject: cuando no se ha resulto*/
        
        return new Promise(function(resolve,reject){
            var formData:any=new FormData();//smulacion de formuylario en un objeto
            var xhr =new XMLHttpRequest();//xhr es sinonimo de ajax que contiene un objeto de peticionm
            //asincrona dejs
            //recorreme todosd losficheros que lleguen ,adjunta el formulario conel nombre que llega
            //añade ese archivocon su nombre
            for(var i=0;i<files.length;i++){
                formData.append(name,files[i],files[i].name);

            }
            //cuando haya un cambio
            xhr.onreadystatechange=function(){
                //valores que funcionan asi segun ajax
                if(xhr.readyState==4){//valores que funciona asi
                    if(xhr.status==200){//si es exitoso se ejecuta la resolucion de la empresa
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);//casocontrario se rechaza
                    }

                }

            }
            //realizamos lapeticion ajax por metodo post y tru para que se haga lapateciion
            xhr.open('POST', url, true);
            //envio elformulario o los datos
            xhr.send(formData);
        });
    }
}