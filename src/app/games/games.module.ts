import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamesListComponent } from "./components/games-list/games-list.component";
import { GamesRoutingModule } from "./game-routing.module";
import { GameDetailsComponent } from './components/game-details/game-details.component';



@NgModule({

    imports : [
CommonModule,
//forChild - adds to the route
//RouterModule.forChild(routes)

GamesRoutingModule

    ],
    declarations:[
        GamesListComponent,
        GameDetailsComponent
        
    ],
    exports:[
        GamesListComponent

    ]
})
export class GamesModule {



}

