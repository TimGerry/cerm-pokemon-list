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



@NgModule({
  declarations: [PokemonListComponent, PokemonFormComponent, PokemonMainComponent, PokemonDetailComponent, PokemonTypePipe],
  imports: [
    CommonModule, LoadingComponent, AsyncPipe, RouterModule, ReactiveFormsModule
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
