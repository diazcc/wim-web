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
    const productRef = collection(this.firestore,'Maletines');
    return collectionData(productRef, {idField : 'id'}) as Observable<any>;
  }


  getCategories() : Observable<any> {
    const productRef = collection(this.firestore,'category');
    return collectionData(productRef, {idField : 'id'}) as Observable<any>;
  }


  getDataHome() : Observable<any> {
    const productRef = collection(this.firestore,'home');
    return collectionData(productRef, {idField : 'id'}) as Observable<any>;
  }

  getUser() : Observable <any>{
    const productRef = collection(this.firestore,'userAdmin');
    return collectionData(productRef);
  }

  getFeaturedProducts() : Observable <any>{
    const productRef = collection(this.firestore,'featuredProducts');
    return collectionData(productRef);
  }


  //_--------------------delete

  getCaps(): Observable <any>{
    const userRef = collection(this.firestore,'caps');
    return collectionData(userRef);
  }

}
