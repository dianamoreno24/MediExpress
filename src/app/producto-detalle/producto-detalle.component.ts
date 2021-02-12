import {Component, Input, OnInit} from '@angular/core';
import products, {Product} from '../mock/products.mock';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  interpolationTitle = 'Nombre producto';
  propertyBinding = 'La CREMA NOCHE BIO RESTAURADORA INTELLIGENT trabaja mientras descansas. Sus ingredientes activos se van directamente a la raíz para dar una solución eficaz y duradera.';
  propertyBindingPrecio = '#19527C';
  @Input() product!: Product;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    products.forEach((item) => {
      console.log(item.id);
      if (id == item.id) {
        this.product = item;
        return;
      }
    });
  }
}
