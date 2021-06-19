import { Component, OnInit } from '@angular/core';
import { Gcategory } from '../../models/gcategory.model';
import { GcategoriesServise } from '../../services/gcategories.services';

@Component({
  selector: 'lq-gcategories-list',
  templateUrl: './gcategories-list.component.html',
  styleUrls: ['./gcategories-list.component.scss']
})
export class GcategoriesListComponent implements OnInit {

gcategories : Gcategory[] = [];
  constructor(private gcategoriesService :GcategoriesServise
    //,
   // private bsModalService: BsModalService
    ) { 

    this.gcategoriesService.getAll().subscribe((response => {
 
      this.gcategories = response;
    }))

  }

  ngOnInit(): void {
  }

}



