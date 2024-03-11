import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-center',
  standalone: true,
  imports: [ CurrencyPipe, DatePipe],
  templateUrl: './pokemon-center.component.html',
  styleUrl: './pokemon-center.component.scss'
})
export class PokemonCenterComponent {
  today = new Date();
}
