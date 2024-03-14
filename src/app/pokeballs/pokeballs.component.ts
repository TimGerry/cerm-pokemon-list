import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokeballs',
  standalone: true,
  imports: [ CurrencyPipe],
  templateUrl: './pokeballs.component.html',
  styleUrl: './pokeballs.component.scss'
})
export class PokeballsComponent {

}
