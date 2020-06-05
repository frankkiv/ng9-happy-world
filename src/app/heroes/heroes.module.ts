import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './services/hero.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HeroesRoutingModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService),
  ],
  providers: [HeroService]
})
export class HeroesModule { }
