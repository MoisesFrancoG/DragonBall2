import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from '../personajes/models/character';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getPersonajeById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

}
