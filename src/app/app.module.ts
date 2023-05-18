import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { FooterComponent } from './footer/footer.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SesionComponent } from './sesion/sesion.component';

import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { DigimonesComponent } from './digimones/digimones.component';
import { DigimonesService } from './digimones/digimones.service';
import { PokemonesComponent } from './pokemones/pokemones.component';

@NgModule({
  declarations: [					
    AppComponent,
      BarraComponent,
      FooterComponent,
      InformacionComponent,
      SesionComponent,
      RegistrarComponent,
      HomeComponent,
      DigimonesComponent,
      PokemonesComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [
    DigimonesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
