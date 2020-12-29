import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService} from '../../servicios/heroes.service';
@Component({
  selector: 'app-buscador-heroes',
  templateUrl: './buscador-heroes.html'
})
export class BuscadorHeroesComponent implements OnInit {

  myHeroes: any = [];
  termino = '';
  constructor(private heroService: HeroesService, private myActiRout: ActivatedRoute,
              private myRouters: Router) { }

  ngOnInit(): void {
    this.myActiRout.params.subscribe(data => {
      console.log(data);
      console.log(data.termino);
      this.termino = data.termino;
      this.myHeroes = this.heroService.buscarHeroeToService(data.termino);
      console.log(this.myHeroes);
    });
  }

  verHeroee = (myHeroSelected: string ) => {
    console.log(myHeroSelected);
    this.myRouters.navigate(['/detalleHeroe', myHeroSelected]);
  }

}
