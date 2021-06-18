import { Component } from '@angular/core';
//import { constructor } from 'console';
import { Game } from './models/game.model';
import { GamesServise } from './services/games.services';

@Component({
  selector: 'lq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coursework';


  games: Game[] = [];
 



constructor(private gameService : GamesServise)
 {

//this.games = this.gameService.getAll();
this.gameService.getAll().subscribe((response => {

  this.games = response;
}))

 }

/*this.games = [
  {
  id : 1, 
      
        title: 'DUNGEONS&DRAGONS 5TH EDITION - STARTER SET',
       // categoryId: number;
        language: 'English',
        price: 41.90,
        discount: 0,
        rating : 8.1,
        isOriginalityCertificateIncluded: true,
        posterImgUrl: 'https://cdn.shopify.com/s/files/1/1355/2451/products/71BrQ6ZxQDL_1024x1024.jpg?v=1584728957',
        publishAt: new Date(),
        numberOfPlayers : '2-15',
        timeOfAGameInMinutes : 'unknown',

        //is it base, expansion or dlc
        typeOfGame : 'base',
      
       // category: Category;
  },
  {
    id : 2, 
      
    title: 'DUNGEONS&DRAGONS 5TH EDITION - STARTER SET',
   // categoryId: number;
    language: 'English',
    price: 41.90,
    discount: 0,
    rating : 8.1,
    isOriginalityCertificateIncluded: true,
    posterImgUrl: 'https://cdn.shopify.com/s/files/1/1355/2451/products/71BrQ6ZxQDL_1024x1024.jpg?v=1584728957',
    publishAt: new Date(),
    numberOfPlayers : '2-15',
    timeOfAGameInMinutes : 'unknown',

    //is it base, expansion or dlc
    typeOfGame : 'base',
  
   // category: Category;

  }
]
 
*/


}
