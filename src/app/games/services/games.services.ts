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

    getAll$(): Observable < Game[]> {
//hardcoded variable for the json server url 
const url = environment.apiUrl + "/games";

return this.httpClient.get<Game[]>(url);
}

getById$(id: number): Observable<Game> {
    const url = `${environment.apiUrl}/games/${id}`;

    return this.httpClient.get<Game>(url);
  }


  edit$(game: Game): Observable<Game> {
    const url = `${environment.apiUrl}/games/${game.id}`;

    game.lastUpdated = new Date();

    return this.httpClient.put<Game>(url, game);

  }create$(game: Game): Observable<Game> {
    const url = environment.apiUrl + '/games';

    game.created = new Date();
    game.lastUpdated = new Date();

    return this.httpClient.post<Game>(url, game);
  }

  save$(game: Game): Observable<Game> {
    if (!game.id) {
      return this.create$(game);
    } else {
      return this.edit$(game);
    }
  }
/*
  category:created = new Date();
 category.lastUpdated = new Date();*/
 delete$(id: number): Observable<void> {
    const url = `${environment.apiUrl}/games/${id}`;

    return this.httpClient.delete<void>(url);
  }

  
 }

     






