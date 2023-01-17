import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit{

  //declaramos nuevas variables que almacenarán los datos consumidos desde servicios

  id!: number;

  public productoValores!:any;

  constructor(private route:ActivatedRoute, private dataServices:ProductService){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.productoValores = this.dataServices.GetProductos(this.id);
  }
}
