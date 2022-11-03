export class Experiencia{
id?: number;
titulo: string;
anio: string;
descripcion: string;

public constructor(titulo:string, anio:string, descripcion:string){
this.titulo=titulo;
this.anio=anio;
this.descripcion=descripcion;
}
}
