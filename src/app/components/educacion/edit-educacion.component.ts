import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Educacion } from 'src/app/model/model.Educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion:Educacion=null;

  constructor(private educacionService: EducacionService, private activatedRouter: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id=this.activatedRouter.snapshot.params['id'];
    this.educacionService.traerEd(id).subscribe(data => {this.educacion=data;}, err =>{
      alert("error al modificar educación"); this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id=this.activatedRouter.snapshot.params['id'];
    this.educacionService.update(id, this.educacion).subscribe(data=> {this.router.navigate(['']);}, 
    err=>{alert("error al modificar educacion"); this.router.navigate(['']);})
  }

}
