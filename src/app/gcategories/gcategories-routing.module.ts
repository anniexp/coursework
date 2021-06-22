import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GcategoriesListComponent } from './components/gcategories-list/gcategories-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: GcategoriesListComponent
  },
  {
    path: '',
    redirectTo: 'list', pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GcategoriesRoutingModule { }
