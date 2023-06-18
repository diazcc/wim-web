import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(
    private httpClient: HttpClient

  ) { }

  getProducts() : Observable<any> {
    return this.httpClient.get('http://localhost:4200/assets/data/product.json');
  }
}
