import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data = {
    name : "hola"
  }
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

    addData(){
      const data = collection(this.firestore, 'dataaa');
      return addDoc(data, this.data);
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
