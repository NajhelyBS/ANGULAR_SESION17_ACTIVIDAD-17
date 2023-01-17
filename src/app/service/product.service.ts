import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //creando array con la lista y valores de los productos
  public products : any[] =[
    {
      id:1,
      codigo:1,
      descripcion:"Galletas chokis",
      pCompra:"10.00",
      pVenta:"15.00",
      ganancia:5,
      existencia:"100.00"
    },
    {
      id:2,
      codigo:2,
      descripcion:"Mermelada de fresa",
      pCompra:"65.00",
      pVenta:"80.00",
      ganancia:15,
      existencia:"100.00"
    },
    {
      id:3,
      codigo:3,
      descripcion:"Aceite",
      pCompra:"18.00",
      pVenta:"20.00",
      ganancia:2,
      existencia:"100.00"
    },
    {
      id:4,
      codigo:4,
      descripcion:"Palomitas de maíz",
      pCompra:"12.00",
      pVenta:"15.00",
      ganancia:3,
      existencia:"100.00"
    },
    {
      id:5,
      codigo:5,
      descripcion:"Doritos",
      pCompra:"5.00",
      pVenta:"8.00",
      ganancia:3,
      existencia:"100.00"
    },
  ]
  
  
  constructor() { }

  GetProductos(id:number){ //ponemos el id como parámetro para utilizarlo más adelante

   const productos = this.products.filter(producto => producto.id === id)
   return productos;
  }
  
}
