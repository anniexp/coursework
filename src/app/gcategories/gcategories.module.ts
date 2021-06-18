import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GcategoriesRoutingModule } from './gcategories-routing.module';
import { GcategoriesListComponent } from './components/gcategories-list/gcategories-list.component';
import { CategoryEditDialogComponent } from './components/category-edit-dialog/category-edit-dialog.component';


@NgModule({
  declarations: [
    GcategoriesListComponent,
    CategoryEditDialogComponent
  ],
  imports: [
    CommonModule,
    GcategoriesRoutingModule
  ]
})
export class GcategoriesModule { }
