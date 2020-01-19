import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsServiceURI: string = 'http://localhost:3000/products';
  private contentHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.contentHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }

  getAllItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsServiceURI);
  }

  getItem(naam : string): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.productsServiceURI}/${naam}`);
  }

  // getAllItems() : Promise<string>{
  //   return fetch(this.productsServiceURI).then(response => response.json())
  // }
}
