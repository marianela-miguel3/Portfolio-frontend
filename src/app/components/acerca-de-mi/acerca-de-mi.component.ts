import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/model.Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  usuario: Usuario= new Usuario("","","","","");


  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(data => {this.usuario = data});
  }

}
