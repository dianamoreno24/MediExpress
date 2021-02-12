import { Component, OnInit } from '@angular/core';
import {CareType} from '../mock/products.mock';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  facial: CareType = CareType.facial;
  bodily: CareType = CareType.bodily;
  constructor() { }

  ngOnInit(): void {
  }

}
