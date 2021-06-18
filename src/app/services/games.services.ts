//import { of } from "rxjs";
//import { Observable } from "rxjs";
//import { of } from "rxjs";
import { Observable } from "rxjs";
import { Game } from "../models/game.model";
import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class GamesServise{
  
    constructor(private httpClient :HttpClient){


    }

getAll(): Observable < Game[]> {
//hardcoded variable for the json server url 
const url = environment.apiUrl + "games"

return this.httpClient.get<Game[]>(url);
/*
return of( [

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
            
          title: 'Monopoly',
         // categoryId: number;
          language: 'Bulgarian',
          price: 48.90,
          discount: 15,
          rating : 8.1,
          isOriginalityCertificateIncluded: true,
          posterImgUrl: 'https://2.bp.blogspot.com/-gUUCIcOWvL0/VDxLzhFzGgI/AAAAAAAADng/8Q5lYO2Q2DM/s1600/Monopoly%2B_Classic_packshot_NL.jpg',
          publishAt: new Date(),
          numberOfPlayers : '2-4',
          timeOfAGameInMinutes : '60+',
      
          //is it base, expansion or dlc
          typeOfGame : 'base',
        
         // category: Category;
      
        }
      ]  
)*/
    }

     

}




