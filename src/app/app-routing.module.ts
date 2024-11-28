import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './personajes/characters/characters.component';
import { TransformationsComponent } from './personajes/transformations/transformations.component';
import { PlanetsComponent } from './personajes/planets/planets.component';

const routes: Routes = [
  {path: '', component: CharactersComponent},
  {path: 'transformaciones', component: TransformationsComponent},
  { path: 'planetas/:id', component: PlanetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
