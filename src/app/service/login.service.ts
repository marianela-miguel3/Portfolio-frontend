import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }
  public ingresar(obj:any):void{
    if(obj.usuario == 'mmiguel' && obj.password=='123'){
      this.router.navigate(['/home']);
    }
    // alert("usuario o contraseña incorrectos");this.router.navigate(['']);
  }

}
