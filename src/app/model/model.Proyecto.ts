export class Proyecto{
    private id?: number;
    private nombre:string;
    private descripcion:string;
    private imagen:string;

    public constructor(nombre:string, descripcion:string, imagen:string){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.imagen=imagen;
    }
}