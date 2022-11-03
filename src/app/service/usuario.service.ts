import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../model/model.Usuario";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
    url='https://backendpor.herokuapp.com/';
  
    constructor(private http:HttpClient) { }
  //observable maneja peticiones asincronas
    public getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(this.url+ 'usuario/1')
    }
  }