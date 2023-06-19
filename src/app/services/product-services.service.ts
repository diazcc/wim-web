import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { collection } from 'firebase/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(
    private httpClient: HttpClient,
    private firestore : Firestore

  ) { }

  getProducts() : Observable<any> {
    return this.httpClient.get('/assets/data/product.json');
  }

  getUser() : Observable <any>{
    const userRef = collection(this.firestore,'userAdmin');
    return collectionData(userRef);
  }
}
