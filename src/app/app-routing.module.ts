import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionComponent } from './pages/edicion/edicion.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  //pantalla inicio
  {path:"", component: HomeComponent}, 
  //pantalla producto
  {path:"edicion/:id", component:EdicionComponent},
  //pantalla error redirigirá al inicio
  {path:"**", redirectTo:"", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
