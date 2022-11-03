import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/model.Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  urlExp= 'https://backendpor.herokuapp.com/educacion'
  constructor(private httpClient: HttpClient) { }

  public traerList():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.urlExp);
  }

  public traerEd(id:number):Observable<Educacion>{
   return this.httpClient.get<Educacion>(this.urlExp + `/${id}`);
  }

  public save(educacion:Educacion):Observable<any>{
    return this.httpClient.post<any>(this.urlExp, educacion);
  }

  public update(id:number, educacion:Educacion):Observable<any>{
    return this.httpClient.put<any>(this.urlExp + `/${id}`,educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.urlExp + `/${id}`);
  }


}
