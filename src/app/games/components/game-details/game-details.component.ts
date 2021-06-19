import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../models/game.model';

import { take } from 'rxjs/operators';
import { GamesServise } from '../../services/games.services';


@Component({
  selector: 'lq-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})

export class GameDetailsComponent implements OnInit {
  [x: string]: any;
  id: string|null;
 // game: Game = new Game();

  /*
//ActivatedRoute pazi informacia za koi component e zareden v momenta, skriti danni se podavat
  constructor(private route: ActivatedRoute) { 
//snapshotva tekushto id xd
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }*/

  constructor(private coursesService: GamesServise,
    //private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {
      console.log(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');
  
  
    if(typeof this.id ==='number') {}

    const serializableState: string | any = this.route.snapshot.paramMap.get('id');
    this.id = serializableState;
}


ngOnInit(): void {
this.gamesService.getById$(this.id).pipe(
take(1)
).subscribe((game: Game) => {
this.game = game;
}, (response: HttpErrorResponse) => {
this.toastrService.error(response.message, 'Error');
this.router.navigate(['games']);
});
}

getCurrentPrice(): number {
const regularPrice = this.game.price;
const discount = this.game.discount; // percent

return (regularPrice * (100 - discount)) / 100;
}


}
