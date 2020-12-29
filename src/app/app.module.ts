import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import {APP_ROUTING} from '../app/app.routes';
// Servicios
import {HeroesService} from './servicios/heroes.service';
// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/share/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';
import { BuscadorHeroesComponent } from './components/buscador-heroes/buscador-heroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    DetalleHeroeComponent,
    BuscadorHeroesComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
