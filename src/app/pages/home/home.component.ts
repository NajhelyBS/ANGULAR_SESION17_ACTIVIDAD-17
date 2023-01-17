import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  Productos!: any[];
  
  constructor(private dataServices:ProductService, private router:Router){}


  //el valor del json con los datos de los productos se lo transferimos a Productos, un nuevo array
  ngOnInit(): void {
    this.Productos = this.dataServices.products; 
  }

  Edicion(id:number){
    this.router.navigate(['/edicion',id]); //parámetros de enlace 
  }
}
