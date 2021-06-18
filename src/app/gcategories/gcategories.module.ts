import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GcategoriesRoutingModule } from './gcategories-routing.module';
import { GcategoriesListComponent } from './components/gcategories-list/gcategories-list.component';


@NgModule({
  declarations: [
    GcategoriesListComponent
  ],
  imports: [
    CommonModule,
    GcategoriesRoutingModule
  ]
})
export class GcategoriesModule { }
