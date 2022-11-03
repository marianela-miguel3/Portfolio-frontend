import { Educacion } from "./model.Educacion";
import { Experiencia } from "./model.Experiencia";
import { Proyecto } from "./model.Proyecto";

export class Usuario {
    //con el signo de pregunta indico que ese atributo no es necesario en el constructor para instanciar la clase
    id?:number;
    nombre: string;
    apellido: string;
    titulo:string;
    imagen:string;
    descripcion: string;

    constructor(nombre:string,apellido:string,titulo:string, imagen:string, descripcion:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.titulo=titulo;
        this.imagen=imagen;
        this.descripcion=descripcion;

    }
}