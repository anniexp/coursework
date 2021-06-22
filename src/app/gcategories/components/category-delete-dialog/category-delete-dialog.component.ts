import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { GcategoriesServise } from '../../services/gcategories.services';
import { Gcategory } from '../../models/gcategory.model';

@Component({
  selector: 'lq-category-delete-dialog',
  templateUrl: './category-delete-dialog.component.html',
  styleUrls: ['./category-delete-dialog.component.scss']
})
export class CategoryDeleteDialogComponent implements OnInit {

  categoryDeleted = new EventEmitter<void>();
  category!: Gcategory;


  constructor(private categoriesService: GcategoriesServise,
    private toastrService: ToastrService,
    private bsModalRef: BsModalRef) { }

ngOnInit(): void {
}

deleteCategory(): void {
this.categoriesService.delete$(this.category.categoryId).pipe(
take(1)
).subscribe(() => {
this.toastrService.success('Category was successfully deleted.', 'Success');
this.hideDialog();
this.categoryDeleted.emit();
});
}

hideDialog(): void {
this.bsModalRef.hide();
}

}
