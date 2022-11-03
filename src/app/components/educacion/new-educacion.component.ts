import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/model.Educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
institucion:string='';
anio:string='';
nombre:string='';
lugar:string='';

  constructor(private educacionService: EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const eduNew= new Educacion(this.institucion,this.anio,this.nombre,this.lugar);
    this.educacionService.save(eduNew).subscribe(data=>{alert("Educación añadida"); this.router.navigate([''])},
    err=>{alert("fallo");this.router.navigate([''])})
  }

}
