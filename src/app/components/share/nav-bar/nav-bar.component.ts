import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../servicios/heroes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {  

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string): void{
    console.log(termino);
    const heroes = this.heroService.buscarHeroeToService(termino);
    console.log(heroes);
  }

}
