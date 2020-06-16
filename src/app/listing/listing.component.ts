import { Component, OnInit } from '@angular/core';
import { Beer } from '../_models/beer.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListingService } from '../_services/listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  beerlist: Observable<Beer[]>;
  namePart = '';
  abvMinimum: number;
  abvMaximum: number;

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.beerlist = this.listingService.load();
  }

  previous(): void {
    if (this.listingService.page > 1) {
      this.beerlist = this.listingService.previous();
    }
  }

  next(): void {
    this.beerlist = this.listingService.next();
  }

  filter() {
    if (this.namePart) {
      this.beerlist = this.beerlist.pipe(
        map(beers => beers.filter(
          beer => beer.name.includes(this.namePart))
        )
      );
    }

    if (this.abvMinimum) {
      this.beerlist = this.beerlist.pipe(
        map(beers => beers.filter(
          beer => beer.abv >= this.abvMinimum)
        )
      );
    }

    if (this.abvMaximum) {
      this.beerlist = this.beerlist.pipe(
        map(beers => beers.filter(
          beer => beer.abv <= this.abvMaximum)
        )
      );
    }

    if (!this.namePart && !this.abvMaximum && !this.abvMinimum) {
      this.beerlist = this.listingService.load();
    }
  }
}
