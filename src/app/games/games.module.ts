import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GamesListComponent } from "./components/games-list/games-list.component";

@NgModule({

    imports : [
CommonModule

    ],
    declarations:[
        GamesListComponent
    ],
    exports:[
        GamesListComponent

    ]
})
export class GamesModule {



}