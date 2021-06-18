import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcategoriesListComponent } from './gcategories-list.component';

describe('GcategoriesListComponent', () => {
  let component: GcategoriesListComponent;
  let fixture: ComponentFixture<GcategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcategoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
