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
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeMarcasSliderComponent } from './home-marcas-slider/home-marcas-slider.component';
import { FooterComponent } from './footer/footer.component';
import { NgFallimgModule } from 'ng-fallimg';
import { IvyCarouselModule } from "angular-responsive-carousel";

import { TablaComponent } from './tabla/tabla.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ButtonComponent } from './button/button.component';
import { ListaColoresComponent } from './lista-colores/lista-colores.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcasSliderComponent,
    FooterComponent
     ProductsContainerComponent,
    ProductFiltersComponent,
    ProductCardComponent,
    ProductsGridComponent,
    TablaComponent,
    FormularioComponent,
    ButtonComponent,
    ListaColoresComponent,
    NavbarComponent,
     HomeBlogComponent,
    Home,
    SliderComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
      NgFallimgModule.forRoot({
      default: '/assets/img/fail-img.png',
      logo: '/assets/img/logo.png',
      icon_instagram: '/assets/icons/icon_instagram.png',
      icon_youtube: '/assets/icons/icon_youtube.png',
      icon_twitter: '/assets/icons/icon_twitter.png',
      icon_geo: '/assets/icons/icon_geo.png',
      icon_email: '/assets/icons/icon_email.png',
    }),
    IvyCarouselModule,
     FormsModule
  ],
  imports: [BrowserModule, NgbModule, FormsModule, NgxSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
