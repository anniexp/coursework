import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../models/game.model';
import { ToastrService } from 'ngx-toastr';

import { take } from 'rxjs/operators';
import { GamesServise } from '../../services/games.services';


@Component({
  selector: 'lq-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})

export class GameDetailsComponent implements OnInit {

 id!: number;
game: Game = new Game;
 // gamesService: any;


  /*
//ActivatedRoute pazi informacia za koi component e zareden v momenta, skriti danni se podavat
  constructor(private route: ActivatedRoute) { 
//snapshotva tekushto id xd
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }*/

  constructor(private gamesService: GamesServise,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {
      console.log(typeof this.route.snapshot.paramMap.get('id'));
      
      //the assistents solution
    if(this.route.snapshot.paramMap.get('id'))
    {
      this.id = +this.route.snapshot.params.id;
      console.log(this.id);
      console.log(typeof this.id);
    }
    
   // console.log(typeof this.route.snapshot.paramMap.get('id'));
/*
    if(typeof this.id ==='number') {}

    const serializableState: string | any = this.route.snapshot.paramMap.get('id');
    this.id = serializableState;*/
}


ngOnInit(): void {
this.gamesService.getById$(this.id).pipe(
take(1)
).subscribe((game: Game ) => {
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
