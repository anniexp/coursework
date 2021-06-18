import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesServise } from './services/games.services';
import { HttpClientModule } from '@angular/common/http';
import { GamesListComponent } from './games/components/games-list/games-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [GamesServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
