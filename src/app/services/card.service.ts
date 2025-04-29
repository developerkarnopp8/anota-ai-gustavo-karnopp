import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiUrl = 'https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json';

  constructor(private http: HttpClient) {}

  
  getCards(): Observable<Card[]> {
    console.log(this.apiUrl)

    return this.http.get<Card[]>(this.apiUrl);
    
  }
}
