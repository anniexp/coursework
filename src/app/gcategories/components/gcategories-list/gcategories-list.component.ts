import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { Gcategory } from '../../models/gcategory.model';
import { GcategoriesServise } from '../../services/gcategories.services';
import { CategoryDeleteDialogComponent } from '../category-delete-dialog/category-delete-dialog.component';
import { CategoryEditDialogComponent } from '../category-edit-dialog/category-edit-dialog.component';

@Component({
  selector: 'lq-gcategories-list',
  templateUrl: './gcategories-list.component.html',
  styleUrls: ['./gcategories-list.component.scss']
})
export class GcategoriesListComponent implements OnInit {

  gcategories!: Gcategory[];
  constructor(private gcategoriesService :GcategoriesServise,
   private bsModalService: BsModalService) { 

    /*this.gcategoriesService.getAll().subscribe((response => {
 
      this.gcategories = response;
    }))*/

  }
  ngOnInit(): void {
    this.getAll();
  }

  onCreateClick(): void {
    this.onEditClick();
  }

  onEditClick(id?: number): void {
    const ref = this.bsModalService.show(CategoryEditDialogComponent, {
      initialState: {
        id: id
      }
    });
/*
    ref.content.categorySaved.pipe(
      take(1)
    ).subscribe(() => {
      this.getAll();
    });*/
  }

  onDeleteClick(category: Gcategory): void {
    const ref = this.bsModalService.show(CategoryDeleteDialogComponent, {
      initialState: {
        category: category
      }
    });
    /*
//hmmmmmmmmmm changed contents definition
    ref.content.categoryDeleted.pipe(
      take(1)
    ).subscribe(() => {
      this.getAll();
    });*/
  }

  private getAll(): void {
    this.gcategoriesService.getAll().pipe(
      take(1)
    ).subscribe((response) => {
      this.gcategories = response;
    });
  }


}



