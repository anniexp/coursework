import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { Gcategory } from '../../models/gcategory.model';
import { GcategoriesServise } from '../../services/gcategories.services';



@Component({
  selector: 'lq-category-edit-dialog',
  templateUrl: './category-edit-dialog.component.html',
  styleUrls: ['./category-edit-dialog.component.scss']
})
export class CategoryEditDialogComponent implements OnInit {
/*
  constructor() { }

  ngOnInit(): void {
  }*/


  /*
    constructor() { }
  
    ngOnInit(): void {
    }*/
  /*
    constructor() { }
  
    ngOnInit(): void {
    }*/
  /*
    constructor() { }
  
    ngOnInit(): void {
    }*/
    formGroup!: FormGroup;
    id!: number;
  category: Gcategory = new Gcategory;

  constructor(private gcategoriesService: GcategoriesServise,
              
              private bsModalRef: BsModalRef,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.id) {
      this.gcategoriesService.getById$(this.id).pipe(
        take(1)
      ).subscribe((response) => {
        this.category = response;
        this.buildForm(response);
      });
    } else {
      this.buildForm();
    }
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();

      return;
    }

    const body: Gcategory = {
      ...this.category,
      ...this.formGroup.value
    };

    this.gcategoriesService.save$(body).pipe(
      take(1)
    ).subscribe((response) => {
      
      this.hideDialog();
      //this.categorySaved.emit(response);
    });
  }

  hideDialog(): void {
    this.bsModalRef.hide();
  }

  private buildForm(category?: Gcategory): void {
    if (!category) {
      category = new Gcategory();
    }

    this.formGroup = this.fb.group({
      name: [category.name, [Validators.required, Validators.minLength(3)]]
    });
  }


}
