import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Beer } from '../_models/beer.model';
import { Observable, Subscription } from 'rxjs';
import { BeerService } from '../_services/beer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number;
  beer: Observable<Beer>;
  parametersObservable: Subscription;

  constructor(private route: ActivatedRoute, private beerService: BeerService) { }

  ngOnInit(): void {
    this.parametersObservable = this.route.params.subscribe({
        next: (result: any) => {
          this.id = result.id;
          this.beer = this.beerService.getBeer(this.id);
          this.beer.subscribe({
            next: (beer: Beer) => {
            },
            error: (err: any) => {
              console.log(err);
            },
            complete: () => {
              console.log('complete');
              }
          });
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      });
  }
}
