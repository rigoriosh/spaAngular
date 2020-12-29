import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};

  @Output() myHeroSelectedd: EventEmitter<string>; // para retornar data al componente padre

  constructor(private myRouters: Router) {
    // inicializar el eventEmmiter
    this.myHeroSelectedd = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe = () => {
    console.log(this.heroe);
    this.myRouters.navigate(['/detalleHeroe', this.heroe.nombre]);
    // this.myHeroSelectedd.emit(this.heroe.nombre); // utilizando el Output
  }

}


