import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';
import { PotionsComponent } from '../potions/potions.component';
import { PokeballsComponent } from '../pokeballs/pokeballs.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-center',
  standalone: true,
  imports: [ CurrencyPipe, DatePipe, AsyncPipe, PotionsComponent, PokeballsComponent, RouterModule],
  templateUrl: './pokemon-center.component.html',
  styleUrl: './pokemon-center.component.scss'
})
export class PokemonCenterComponent {
  today = new Date();
  second$: Observable<number>;

  constructor() {
    this.second$ = interval(1000).pipe(tap(console.log));
  }
}
