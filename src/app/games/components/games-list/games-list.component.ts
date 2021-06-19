import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GamesServise } from '../../services/games.services';

@Component({
  selector: 'lq-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService : GamesServise,
    
    
    )
  {
 
 //this.games = this.gameService.getAll();
 this.gameService.getAll().subscribe((response => {
 
   this.games = response;
 }))
 
  }

  ngOnInit(): void {
  }

}
