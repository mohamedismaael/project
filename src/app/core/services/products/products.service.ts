import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../shared/interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {}

  getallproducts(): Observable<any> {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products');

  }

  getspecifiproduct(id: number): Observable<any> {
    return this.httpClient.get<IProduct>(`https://fakestoreapi.com/products/${id}`);
  }
}