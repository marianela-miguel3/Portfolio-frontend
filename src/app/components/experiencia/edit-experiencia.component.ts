import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/model.Experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
experiencia:Experiencia=null;

  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id=this.activatedRouter.snapshot.params['id'];
    this.experienciaService.traerExp(id).subscribe(data => {this.experiencia=data;}, err =>{
      alert("error al modificar experiencia"); this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id=this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.experiencia).subscribe(data=> {this.router.navigate(['']);}, 
    err=>{alert("error al modificar experiencia"); this.router.navigate(['']);})
  }
}
