import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html'
})
export class DetalleHeroeComponent implements OnInit {

  heroSelected: Heroe = {
    aparicion: '',
    bio: '',
    casa: '',
    img: '',
    nombre: ''
  };
  constructor(
    private myActiRout: ActivatedRoute,
    private myServisHeroe: HeroesService
    ) {
    this.myActiRout.params.subscribe(p => {
      console.log(p, p.id);
      this.heroSelected = this.myServisHeroe.getHeroe(p.id);
      console.log(this.heroSelected)
    });
  }

  ngOnInit(): void {
  }

}
