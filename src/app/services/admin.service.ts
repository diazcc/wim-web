import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { collection, onSnapshot, query, where , doc , addDoc, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Auth, authState, EmailAuthCredential, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private user : string;
  private password :  string
  constructor(
    private httpClient: HttpClient,
    private firestore : Firestore,
    private storage : Storage,
    private auth : Auth
  ) {
    this.user= "client@inin.com";
    this.password= "jp5689";
  }

  loginAdmin(email : string, password : string){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  getToken() : Observable<boolean>{
    console.log(authState(this.auth));
    return authState(this.auth).pipe(
      map(user => !!user) // Devuelve true si hay un usuario autenticado, o false si no hay un usuario autenticado
    );
  }



}
