import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-pokemon-center',
  standalone: true,
  imports: [ CurrencyPipe, DatePipe, AsyncPipe],
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
