import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamesListComponent } from "./components/games-list/games-list.component";
import { GamesRoutingModule } from "./game-routing.module";
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameCreateComponent } from './components/game-create/game-create.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';






@NgModule({

    imports : [
CommonModule,
//forChild - adds to the route
//RouterModule.forChild(routes)
ModalModule.forChild(),
GamesRoutingModule,
ReactiveFormsModule,
FormsModule,
ButtonsModule.forRoot(),
BrowserAnimationsModule,
BsDatepickerModule.forRoot(), 

    ],
    declarations:[
        GamesListComponent,
        GameDetailsComponent,
        GameCreateComponent

        
    ],
    exports:[
        GamesListComponent

    ]
})
export class GamesModule {



}

