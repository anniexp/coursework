import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GamesListComponent } from './components/games-list/games-list.component';


const routes: Routes = [
    {
      path: 'list',
      component: GamesListComponent
    }
    
    ,
    {
      path: 'details/:id',
      component: GameDetailsComponent
    }/*
    {
      path: 'create',
      component: GameEditComponent
    },
    {
      path: 'edit/:id',
      component: GameEditComponent
    }*/,
 {
      path: '',
      redirectTo: 'list'
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class GamesRoutingModule { }
