import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getTrans(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
