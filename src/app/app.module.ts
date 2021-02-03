import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeMarcasSliderComponent } from './home-marcas-slider/home-marcas-slider.component';
import { FooterComponent } from './footer/footer.component';
import { NgFallimgModule } from 'ng-fallimg';
import { IvyCarouselModule } from "angular-responsive-carousel";


@NgModule({
  declarations: [
    AppComponent,
    HomeBlogComponent,
    HomeMarcasSliderComponent,
    FooterComponent
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
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
