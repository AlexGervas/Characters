import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from './models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  loadCharacters(): Observable<Character[]> {
    return this.http.get<any>('https://swapi.dev/api/people').pipe(
      map(data => data.results)
    );
  }
}