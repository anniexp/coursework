import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './games/components/games-list/games-list.component';

const routes: Routes = [
  {
    path: 'games',
    //direct loading
   // component : GamesListComponent
   //lazy loading
   loadChildren: () => import ('./games/games.module').then(m => m.GamesModule)
  },
  /*{
    path: 'categories',
    component : 

  }*/
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
