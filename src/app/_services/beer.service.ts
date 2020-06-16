import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../_models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private httpClient: HttpClient) {
  }

  getBeers(page: number = 1): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${page}&per_page=5`).pipe();
  }

  getBeer(id: number): Observable<Beer> {
    return this.httpClient.get<Beer>(`https://api.punkapi.com/v2/beers/${id}`).pipe();
  }
}
