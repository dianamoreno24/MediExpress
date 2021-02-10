import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css'],
})
export class ProductFiltersComponent implements OnInit {
  @Input() brands: string[] = [];
  @Input() applicationTimes: string[] = [];
  @Input() maxPrice = 0;
  @Input() minPrice = 0;

  filters = {
    brand: null,
    applicationTime: null,
    minPrice: 0,
    maxPrice: 0,
  };

  options: Options = {
    floor: 0,
    ceil: 0,
  };

  @Output() filterEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.filters = {
      ...this.filters,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
    };
    this.options = {
      floor: this.minPrice,
      ceil: this.maxPrice,
      translate: (): string => {
        return '';
      },
    };
  }

  // tslint:disable-next-line: typedef
  changeFilters() {
    this.filterEvent.emit(this.filters);
  }
}
