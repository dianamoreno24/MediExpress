import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
