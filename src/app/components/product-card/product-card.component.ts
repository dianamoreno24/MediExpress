import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/mock/products.mock';
import {Router, ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  constructor(private Route: ActivatedRoute, private Ruta: Router) {
  }
  ngOnInit(): void {}

  irAVerDetalle(): void {
    this.Ruta.navigate(['ver-detalle', {id: this.product.id}]);
  }
}
