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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from "@angular/forms";

import {MatMenuModule} from '@angular/material/menu';
import { TablaComponent } from './tabla/tabla.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ButtonComponent } from './button/button.component';
import { ListaColoresComponent } from './lista-colores/lista-colores.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
     ProductsContainerComponent,
    ProductFiltersComponent,
    ProductCardComponent,
    ProductsGridComponent,
    TablaComponent,
    FormularioComponent,
    ButtonComponent,
    ListaColoresComponent,
    NavbarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule
  ],
  imports: [BrowserModule, NgbModule, FormsModule, NgxSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
