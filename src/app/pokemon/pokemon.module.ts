import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';
import { LoadingComponent } from '../loading/loading.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { HoverDirective } from '../directives/hover.directive';
import { OrDirective } from '../directives/or.directive';



@NgModule({
  declarations: [PokemonListComponent, PokemonFormComponent, PokemonMainComponent, PokemonDetailComponent, PokemonTypePipe],
  imports: [
    CommonModule, LoadingComponent, AsyncPipe, RouterModule, ReactiveFormsModule, HoverDirective, OrDirective
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
