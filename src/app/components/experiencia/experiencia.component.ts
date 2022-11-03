import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/model.Experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

experiencias:Experiencia[]=[];

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.experienciaService.traerList().subscribe(data => {this.experiencias = data;})
  }

  delete(id?:number){
    if(id!=undefined){
      this.experienciaService.delete(id).subscribe(
        data => {this.cargarExperiencia();
        }, err=> {
          alert("no se pudo eliminar la experiencia")
        }
      )
    }
  }



}
