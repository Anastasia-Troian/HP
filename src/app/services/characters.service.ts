import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCollection } from 'src/app/models/apiCollection';
import { Observable } from 'rxjs';
import { CharactersDto } from '../models/charactersDto';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
  getCharacters(): Observable<Array<CharactersDto>> {
    return this.http.get<Array<CharactersDto>>("http://hp-api.herokuapp.com/api/characters");
  }
}
