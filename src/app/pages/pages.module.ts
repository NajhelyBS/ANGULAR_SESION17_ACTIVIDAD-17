import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EdicionComponent } from './edicion/edicion.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    EdicionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    EdicionComponent
  ]
})
export class PagesModule { }
