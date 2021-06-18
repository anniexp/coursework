import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesServise } from './games/services/games.services';
import { HttpClientModule } from '@angular/common/http';
import { GamesListComponent } from './games/components/games-list/games-list.component';
import { Routes } from '@angular/router';
import { GamesModule } from './games/games.module';


const routes: Routes = [
  {
    path: 'games',
    component : GamesListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GamesModule,
   
  ],
  providers: [GamesServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
