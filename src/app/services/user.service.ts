import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { addDoc, collection, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
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
    private firestore : Firestore,
    private storage : Storage
  ) { }


  //generate id
  generateIdRandom(){
    let textoGenerado = "";
    const fechaHoraActual = new Date();
    const fecha = fechaHoraActual.toISOString().split('T')[0];
    const hora = fechaHoraActual.toTimeString().split(' ')[0];
    const milisegundos = fechaHoraActual.getMilliseconds();
    const valorAleatorio = Math.floor(Math.random() * 1000);
    return textoGenerado = `${fecha}${hora}${milisegundos}${valorAleatorio}`.replace(/[\s:-]/g, '');
  }

  //sesion
    register(email : any, password : any){
      console.log(email,password);
      return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login(email : any , password : any){
      return signInWithEmailAndPassword(this.auth, email, password);
    }

    logOut(){
      return signOut(this.auth);
    }

    // getData

    getUserId() : Observable <any>{
      const collectionRef = collection(this.firestore,'user');
      return collectionData(collectionRef, {idField : 'id'}) as Observable<any>;
    }

    getUserData(id : any) : Observable <any>{
      const collectionRef = collection(this.firestore,"user/"+id+"/userData");
      return collectionData(collectionRef, {idField : 'id'}) as Observable<any>;
    }

    // getToken() : Observable<boolean>{
    //   console.log(authState(this.auth));
    //   return authState(this.auth).pipe(
    //     map(user => !!user) // Devuelve true si hay un usuario autenticado, o false si no hay un usuario autenticado
    //   );
    // }

    // create data

    setDataDescription(id :any, data: any){
      const collectionRef : any = collection(this.firestore,"user/"+id+"/profileData");
      const docRef = doc(collectionRef,'dataDescription');
      return setDoc(docRef, data);
    }
    setDataPresentation(id :any, data: any){
      const collectionRef : any = collection(this.firestore,"user/"+id+"/profileData");
      const docRef = doc(collectionRef,'dataPresentation');
      return setDoc(docRef, data);
    }
    createUserIdandSetData(){
      const  dataEmpty = {}
      const collectionRef = collection(this.firestore, 'user');
      return addDoc(collectionRef, dataEmpty)
    }

    addItemDataUser(id : any, userData : {}){
      const collectionRef : any = collection(this.firestore,"user/"+id+"/userData");
      const docRef = doc(collectionRef, 'data');
      return updateDoc(docRef , userData)
    }


    addDataUser( id : any, userData : {}){

      const  dataEmpty = {};
      const collectionRef : any = collection(this.firestore,"user/"+id+"/userData");
      const docRef = doc(collectionRef, 'data');
      return setDoc(docRef, userData);
    }


    // create field

    async setImage(field : any){
      const imgRef = ref(this.storage,`images/${this.generateIdRandom()}`);
      try {
        await uploadBytes(imgRef, field);
        const downloadURL = await getDownloadURL(imgRef);
        return downloadURL;
      } catch (error) {
        console.error('Error al subir el archivo:', error);
        return null;
      }
    }
}
