import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersDto } from '../models/charactersDto';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

constructor(private http: HttpClient) { }

getStudents(): Observable<Array<CharactersDto>> {
  return this.http.get<Array<CharactersDto>>("http://hp-api.herokuapp.com/api/characters/students");
}
getStudentsHouse(house: string): Observable<Array<CharactersDto>> {
  return this.http.get<Array<CharactersDto>>("http://hp-api.herokuapp.com/api/characters/house/" + house);
}
}
