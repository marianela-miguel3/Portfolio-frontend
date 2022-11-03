import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/model.Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  urlExp= 'https://backendpor.herokuapp.com/experiencia'

  constructor(private httpClient: HttpClient) { }

  public traerList():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.urlExp);
  }

  public traerExp(id:number):Observable<Experiencia>{
   return this.httpClient.get<Experiencia>(this.urlExp + `/${id}`);
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.urlExp, experiencia);
  }

  public update(id:number, experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.urlExp + `/${id}`,experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.urlExp + `/${id}`);
  }


}
