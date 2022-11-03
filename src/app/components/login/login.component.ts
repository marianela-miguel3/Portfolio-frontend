import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';import { LoginService } from 'src/app/service/login.service';
;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public form!: FormGroup;

ngOnInit(): void {
  this.form=this.createMyForm();
}

  constructor(private router:Router, private fb: FormBuilder, private login: LoginService, private activatedRouter: ActivatedRoute) { 
    this.form = fb.group({
      usuario: [''],
      password: [''],
  })
}

  private createMyForm():FormGroup{
return this.fb.group({
  usuario:['',Validators.required],
  password:['',Validators.required]
})
  }

  public submitFormulario():void{
    if(this.form.invalid){
    Object.values(this.form.controls).forEach(control=>
     control.markAllAsTouched());
    }
  }

  public get f():any{
    return this.form.controls;
  }


 public doLogin(){
  this.login.ingresar(this.form.value)
}
}