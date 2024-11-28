import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../models/character';
import { Planet } from '../models/planets';
import { Location } from '@angular/common';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  personaje!: Character;
  planeta!: Planet;

  constructor(
    private route: ActivatedRoute,
    private charService: CharactersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.charService.getPersonajeById(id).subscribe((response) => {
      this.personaje = response;
      this.planeta = response.originPlanet;
      console.log('Planeta de origen:', this.planeta);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
