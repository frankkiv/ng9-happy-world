import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from './../../services/hero.service';
import { Hero } from './../../model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: any[];
  constructor( private heroService: HeroService ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }

}
