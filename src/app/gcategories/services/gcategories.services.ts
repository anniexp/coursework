import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Gcategory } from "../models/gcategory.model";

@Injectable({providedIn:"root"})
export class GcategoriesServise{
  
    constructor(private httpClient :HttpClient){


    }

getAll(): Observable < Gcategory[]> {
//hardcoded variable for the json server url 
const url = environment.apiUrl + "/categories";

const httpParams = new HttpParams({
  fromObject: {
    _embed: 'games'
  }
})


return this.httpClient.get<Gcategory[]>(url, {
  params: httpParams
});
}


getById$(id: number): Observable<Gcategory> {
    const url = `${environment.apiUrl}/categories/${id}`;

    return this.httpClient.get<Gcategory>(url);
  }


  edit$(category: Gcategory): Observable<Gcategory> {
    const url = `${environment.apiUrl}/categories/${category.categoryId}`;

    category.lastUpdated = new Date();

    return this.httpClient.put<Gcategory>(url, category);

  }create$(category: Gcategory): Observable<Gcategory> {
    const url = environment.apiUrl + '/categories';

    category.created = new Date();
    category.lastUpdated = new Date();

    return this.httpClient.post<Gcategory>(url, category);
  }

  save$(category: Gcategory): Observable<Gcategory> {
    
    if (!category.categoryId) {
      return this.create$(category);
    } else {
      return this.edit$(category);
    }
  }
/*
  category:created = new Date();
 category.lastUpdated = new Date();*/
 delete$(id: number): Observable<void> {
    const url = `${environment.apiUrl}/categories/${id}`;

    return this.httpClient.delete<void>(url);
  }


}