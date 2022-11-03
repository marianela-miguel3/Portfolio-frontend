import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/model.Educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones:Educacion[]=[];
  
  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();
    }
  
    cargarEducacion():void{
      this.educacionService.traerList().subscribe(data => {this.educaciones = data;})
    }
  
    delete(id?:number){
      if(id!=undefined){
        this.educacionService.delete(id).subscribe(
          data => {this.cargarEducacion();
          }, err=> {
            alert("no se pudo eliminar la educacion")
          }
        )
      }
    }

}
