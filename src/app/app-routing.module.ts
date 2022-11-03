import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {path:'', redirectTo: "/login", pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'acercaDeMi', component: AcercaDeMiComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'educacion', component: EducacionComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'nuevaExperiencia', component:NewExperienciaComponent},
  {path:'editExperiencia/:id', component:EditExperienciaComponent},
  {path:'nuevaEducacion', component:NewEducacionComponent},
  {path:'editEducacion/:id', component:EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
