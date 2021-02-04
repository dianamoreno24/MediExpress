import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/mock/products.mock';

@Component({
  selector: 'app-prgit initgit initoducts-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css'],
})
export class ProductsGridComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor() {}

  ngOnInit(): void {}
}
