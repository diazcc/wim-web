import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data = {
    name : "hola"
  }
  private userId = "";
  constructor(
    private auth: Auth,
    private firestore : Firestore
  ) { }

    register(email : any, password : any){
      console.log(email,password);
      return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login(email : any , password : any){
      return signInWithEmailAndPassword(this.auth, email, password);
    }

    createUserIdandSetData(userData : {}){
      const  dataEmpty = {}
      let userId = "";
      const collectionRef = collection(this.firestore, 'user');
      return addDoc(collectionRef, dataEmpty)
    }


    addDataUser( id : any, userData : {}){
      console.log("id "+id);
      console.log(userData);
      console.log(this.userId);

      const  dataEmpty = {};
      const collectionRef : any = collection(this.firestore,"user/"+id+"/userData");
      const docRef = doc(collectionRef, 'data');
      return setDoc(docRef, userData);
    }

    logOut(){
      return signOut(this.auth);
    }

    getToken() : Observable<boolean>{
      console.log(authState(this.auth));
      return authState(this.auth).pipe(
        map(user => !!user) // Devuelve true si hay un usuario autenticado, o false si no hay un usuario autenticado
      );
    }

}
