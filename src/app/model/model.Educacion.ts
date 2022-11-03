export class Educacion{
    id?: number;
    institucion:string;
    anio:string;
    nombre:string;
    lugar:string;

    public constructor(institucion:string, anio:string, nombre:string, lugar:string){
    this.institucion=institucion;
    this.anio=anio;
    this.nombre=nombre;
    this.lugar=lugar;
    }
}