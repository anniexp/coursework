import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GcategoriesRoutingModule } from './gcategories-routing.module';
import { GcategoriesListComponent } from './components/gcategories-list/gcategories-list.component';
import { CategoryEditDialogComponent } from './components/category-edit-dialog/category-edit-dialog.component';
import { CategoryDeleteDialogComponent } from './components/category-delete-dialog/category-delete-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    GcategoriesListComponent,
    CategoryEditDialogComponent,
    CategoryDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GcategoriesRoutingModule,
    ModalModule.forChild(),
  ]
})
export class GcategoriesModule { }
