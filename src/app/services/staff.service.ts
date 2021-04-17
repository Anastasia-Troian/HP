import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersDto } from '../models/charactersDto';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

constructor(private http: HttpClient) { }

getStaff(): Observable<Array<CharactersDto>> {
  return this.http.get<Array<CharactersDto>>("http://hp-api.herokuapp.com/api/characters/staff");
}
}
