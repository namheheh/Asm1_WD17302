import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = "http://localhost:3000/products/";
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.api);
  }
  getProductById(id: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(this.api + id);
  }
  deleteProduct(id: number): Observable<Iproduct> {
    return this.http.delete<Iproduct>(this.api + id);
  }
  addProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(this.api, product);
  }
  updateProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(this.api + product.id, product);
  }
}
