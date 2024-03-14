import { Component, Inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { APP_TITLE } from './app.config';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { PokemonModule } from './pokemon/pokemon.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppMenuComponent, PokemonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string;

  constructor(@Inject(APP_TITLE) title: string) {
    this.title = title;
  }
}
