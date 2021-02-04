import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    ProductsContainerComponent,
    ProductFiltersComponent,
    ProductCardComponent,
    ProductsGridComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule, NgxSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
