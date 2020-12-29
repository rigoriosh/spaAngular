import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroService: HeroesService, private myRouters: Router) {
    console.log('constructot 1');
   }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
    console.log(this.heroes);
  }

  verHeroee = (myHeroSelected: string ) => {
    console.log(myHeroSelected);
    this.myRouters.navigate(['/detalleHeroe', myHeroSelected]);
  }

}
