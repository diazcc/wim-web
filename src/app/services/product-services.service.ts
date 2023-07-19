import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { collection, onSnapshot, query, where , doc , addDoc, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(
    private httpClient: HttpClient,
    private firestore : Firestore

  ) {
  }


  getProducts(category : any) : Observable<any> {
    const productRef = collection(this.firestore,category);
    return collectionData(productRef, {idField : 'id'}) as Observable<any>;
  }

  getProduct(id:any, category:any){
    const docRef = doc(this.firestore, category, id);
    return docData(docRef, {idField : 'id'}) as Observable<any>;
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

//_----------------set

  async modifyCategory(id : string, data :any){
    console.log("hola");
    const categoryDoc = doc(this.firestore,"category",id);
    try {
      await updateDoc(categoryDoc, data);
      console.log('Documento actualizado exitosamente!');
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
    }
  }

//_------update

  async updateFeaturedProducts(data : any){
    await this.deleteFeaturedProducts();
    const docRef : any = collection(this.firestore,"featuredProducts");
    try {
      data.map((products:any)=>{
        console.log(products);
        addDoc(docRef, products);
      });
      console.log(data);
      console.log('Documento actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
    }
  }
  //_--------------------delete
  async deleteFeaturedProducts(){
    const collectionRef : any = collection(this.firestore,"featuredProducts");
    try {
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
      console.log('Colección eliminada exitosamente!');
    } catch (error) {
      console.error('Error al eliminar la colección:', error);
    }
  }



  //_--------------------delete services- unused

  getCaps(): Observable <any>{
    const userRef = collection(this.firestore,'caps');
    return collectionData(userRef);
  }


  //_-------filters--------------

  async testCategory(){
    const categoryRef = collection(this.firestore,'caps');
    const q  = query(categoryRef, where('marc', '==', 'Adidas'));
    const unsubscribe = await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Accede a los datos del documento filtrado
      });
    });
  }

  async testMarc(){
    const categoryRef = collection(this.firestore,'caps');
    const q  = query(categoryRef, where('marc', '==', 'Adidas'));
    const unsubscribe = await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Accede a los datos del documento filtrado
      });
    });
  }
  async testColor(){
    const categoryRef = collection(this.firestore,'caps');
    const q  = query(categoryRef, where('color', '==', 'red'));
    const unsubscribe = await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Accede a los datos del documento filtrado
      });
    });
  }
  async testPrice(){
    const categoryRef = collection(this.firestore,'caps');
    const q  = query(categoryRef, where('value', '>=', 50000), where('value', '<=', 100000));
    const querySnapshot = await onSnapshot(q, (snapshot) => {
      const products :any = [];
      snapshot.forEach((doc) => {

        const product = doc.data();
        products.push(product);
      });

    });
  }

}
