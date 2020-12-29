import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {

  constructor(private myRouters: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string): void{
    console.log(termino);
    this.myRouters.navigate(['/shearchedHeroe', termino]); // el / es por q es relativo a nuestra ubicaión
  }

}
