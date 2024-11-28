import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { CharactersService } from '../../services/characters.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  personajes: Character[] = [];

  constructor(private charSer: CharactersService) {}

  ngOnInit(): void {
    this.charSer.getPersonajes().subscribe((response) => {
      this.personajes = response.items;
      console.log(this.personajes);
    });
  }
}
