import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchPhrase$: BehaviorSubject<string> = new BehaviorSubject('');

  apiUrl: string = environment.apiUrl;

  constructor( private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: Product, file: File | null): Observable<Product> {
    let formData : FormData = new FormData();
    if(file !== null){
      formData.append('file', file);
    }
    formData.append('data', JSON.stringify(product));
    return this.http.post<Product>(
      `${this.apiUrl}`,
      formData
    );
  }

  update(product: Product, file: File | null): Observable<Product> {
    let formData : FormData = new FormData();
    if(file !== null){
      formData.append('file', file);
    }
    formData.append('data', JSON.stringify(product));
    return this.http.patch<Product>(
      `${this.apiUrl}/${product.id}`,
      formData
    );
  }

  delete(product: Product): Observable<Product> {
    return this.http.delete<Product>(
      `${this.apiUrl}/${product.id}`
    );
  }
}
