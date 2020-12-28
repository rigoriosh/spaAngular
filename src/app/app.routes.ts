import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {DetalleHeroeComponent} from './components/detalle-heroe/detalle-heroe.component';
const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'abaut', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'detalleHeroe/:id', component: DetalleHeroeComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
