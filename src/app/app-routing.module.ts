import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesListComponent } from './games/components/games-list/games-list.component';

const routes: Routes = [
  {
    path: 'games',
    //direct loading
   // component : GamesListComponent
   //lazy loading
   loadChildren: () => import ('./games/games.module').then(m => m.GamesModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./gcategories/gcategories.module').then(m => m.GcategoriesModule)

  }
  ,
  {
    path: 'dashboard',
    component: DashboardComponent
  },
{
  
path :'',
redirectTo: 'dashboard',
pathMatch: 'full'
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
