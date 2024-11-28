import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { TransformationsComponent } from './transformations/transformations.component';
import { PlanetsComponent } from './planets/planets.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterEvent, RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    CharactersComponent,
    TransformationsComponent,
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterLink
  ],
  exports: [
    CharactersComponent,
    TransformationsComponent,
    PlanetsComponent
  ]
})
export class PersonajesModule { }
