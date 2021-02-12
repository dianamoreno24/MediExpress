import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  interpolationTitle = 'Nombre producto';
  propertyBinding = 'La CREMA NOCHE BIO RESTAURADORA INTELLIGENT trabaja mientras descansas. Sus ingredientes activos se van directamente a la raíz para dar una solución eficaz y duradera.';
  propertyBindingPrecio = '#19527C';

  // tslint:disable-next-line:typedef
  click($event){
    console.log('Añadió a carrito', $event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
