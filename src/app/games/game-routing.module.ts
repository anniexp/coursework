import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component';


const routes: Routes = [
    {
      path: 'list',
      component: GamesListComponent
    }
    /*
    ,
    {
      path: 'details/:id',
      component: GamesDetailsComponent
    },
    {
      path: 'create',
      component: GamesEditComponent
    },
    {
      path: 'edit/:id',
      component: GamesEditComponent
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
