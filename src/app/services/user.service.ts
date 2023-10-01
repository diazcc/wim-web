import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

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

    addData(){
      const data = collection(this.firestore, 'dataaa');
      return addDoc(data, this.data);
    }


}
