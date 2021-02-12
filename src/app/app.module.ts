import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';

import {MatMenuModule} from '@angular/material/menu';
import { HomeBlogComponent } from './home-blog/home-blog.component';

import { FooterComponent } from './footer/footer.component';
import { NgFallimgModule } from 'ng-fallimg';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { ButtonComponent } from './button/button.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import {HomeMarcasSliderComponent} from './home-marcas-slider/home-marcas-slider.component';
import { ProductosComponent } from './productos/productos.component';
import { ComentarioProductoComponent } from './comentario-producto/comentario-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductsContainerComponent,
    ProductFiltersComponent,
    ProductCardComponent,
    ProductsGridComponent,
    ButtonComponent,
    NavbarComponent,
    SliderComponent,
    ProductoDetalleComponent,
    HomeBlogComponent,
    SliderComponent,
    HomeMarcasSliderComponent,
    ProductosComponent,
    ComentarioProductoComponent,
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, NgxSliderModule,
    RouterModule.forRoot([
      {path: '', component: ProductosComponent},
      {path: 'ver-detalle', component: ProductoDetalleComponent},
    ]),
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
