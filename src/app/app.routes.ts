import { Routes } from '@angular/router';
import { PokemonCenterComponent } from './pokemon-center/pokemon-center.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
  {
    path: 'pokemon-center', component: PokemonCenterComponent, children: [
      { path: '', redirectTo: 'pokeballs', pathMatch: 'full' },
      { path: 'pokeballs', loadComponent: () => import('./pokeballs/pokeballs.component').then(c => c.PokeballsComponent) },
      { path: 'potions', loadComponent: () => import('./potions/potions.component').then(c => c.PotionsComponent) }
    ]
  },
  { outlet: 'extra', path: 'shopping-cart', component: ShoppingCartComponent }
];
