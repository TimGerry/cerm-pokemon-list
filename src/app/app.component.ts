import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';
import { FormsModule } from '@angular/forms';
import { PokemonCenterComponent } from './pokemon-center/pokemon-center.component';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';
import { APP_TITLE } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonTypePipe, FormsModule, PokemonCenterComponent, PokemonMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string;

  constructor(@Inject(APP_TITLE) title: string) {
    this.title = title;
  }
}
