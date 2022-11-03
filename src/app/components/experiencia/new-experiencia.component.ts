import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/model.Experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
titulo:string='';
anio:string='';
descripcion:string='';

  constructor(private experienciaService: ExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }
 
  onCreate():void{
    const expeNew= new Experiencia(this.titulo,this.anio,this.descripcion);
    this.experienciaService.save(expeNew).subscribe(data=>{alert("Experiencia añadida"); this.router.navigate([''])},
    err=>{alert("fallo");this.router.navigate([''])})
  }


}
