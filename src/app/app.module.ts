import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesServise } from './games/services/games.services';
import { HttpClientModule } from '@angular/common/http';
import { GamesListComponent } from './games/components/games-list/games-list.component';
import { RouterModule, Routes } from '@angular/router';
import { GamesModule } from './games/games.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),

    AppRoutingModule,
    HttpClientModule,
    ModalModule,
   GamesModule,
   ToastrModule.forRoot(), // ToastrModule added
   BrowserAnimationsModule, // required animations module
   BsDatepickerModule.forRoot(),    
  

   /*ToastrModule.forRoot({
    positionClass: 'toast-top-center'
  }),*/
   
  ],
  providers: [GamesServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
