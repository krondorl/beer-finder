import { Injectable } from '@angular/core';
import { BeerService } from '../_services/beer.service';
import { Beer } from '../_models/beer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  page = 1;

  constructor(private beerService: BeerService) { }

  load(): Observable<Beer[]> {
    return this.beerService.getBeers(this.page);
  }

  previous(): Observable<Beer[]> {
    if (this.page > 1) {
      this.page -= 1;
      return this.beerService.getBeers(this.page);
    }
  }

  next(): Observable<Beer[]> {
    this.page += 1;
    return this.beerService.getBeers(this.page);
  }
}
