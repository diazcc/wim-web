import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { collection, onSnapshot, query, where , DocumentSnapshot, addDoc, updateDoc, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-home',
  templateUrl: './adm-home.page.html',
  styleUrls: ['./adm-home.page.scss']
})
export class AdmHomePage {
  dataMenu  = {
    classMenu : "close",
    closeMenu : ()=>{ this.closeMenu()},
    closeSesion :()=>{}
  }
  formulario: FormGroup;
  alertForm = "";
  classForm = "";
  private titlePresentation : string ="";
  private descriptionPresentation : string ="";
  private linkWhatsapp : string ="";
  private urlImg : string ="";
  private linkFacebook : string ="";
  private linkInstagram : string ="";
  private fileTC : string ="";
  @Input() dataHeader = {
    textTitle :"Infinity Industry",
    urlIconMenu: "assets/icons/menu.svg",
    classHeader :"header",
    classContentHeader :"content-header",
    classIconMenu :"icon-Menu",
    classIconMenu2 :"classIconMenu",
    classHeaderTitulo :"header-titulo",
    clickHeader : () => {this.showMenu()},
    clickSearch : () => {this.setSearch()},
    dataNavBar : {
      textOption1 : "Todos los productos",
      textOption2 : "Marcas",
      textOption3 : "Contactanos",
      classMenu : "menu--hidden",
      classContentMenu : "content-menu",
      classOptionMmenu : "option-menu",
      redirectContact : () =>{},
      redirectMarcs : () =>{}
    }
  }
  @Input() dataSearch = {
    classSearch : "hidde",
    closeSearch : () =>{},
    dataCardProduct : [
      {
        urlImgPrincipalProduct : "/assets/img/logodragonsolo.svg",
        textTitle : "--",
        textDescription :"--",
        textValue : "--",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/logodragonsolo.svg",
        textTitle : "--",
        textDescription :"--",
        textValue : "--",
        clickProduct : () =>{}
      }
    ]
   }
   dataHome = {
    descriptionPresentation :"",
    titlePresentation : "",
    linkWhatsapp :" ",
    linkInstagram :"",
    linkFacebook : "",
    fileTC : "",
    urlImg : ""
  }

   constructor(
    private renderer : Renderer2,
    private router : Router,
    private firestore: Firestore,
    private storage : Storage
   ){
    this.formulario = new FormGroup({
      descriptionPresentation : new FormControl(),
      titlePresentation : new FormControl(),
      linkWhatsapp : new FormControl(),
      linkInstagram : new FormControl(),
      linkFacebook : new FormControl(),
      fileTC : new FormControl(),
      urlImg : new FormControl()
    })
  }

  onSubmit(){
    console.log("Se guardo")
    console.log(this.formulario.value)
    this.updateData();
    this.formulario.reset();
  }

  async updateData(){
    const collectionRef : any = collection(this.firestore,"home");
    const docRef = doc(collectionRef,'dataHome');
    const data = {
      descriptionPresentation : this.formulario.get('descriptionPresentation')?.value,
      titlePresentation : this.formulario.get('titlePresentation')?.value,
      linkWhatsapp : "https://wa.me/+57"+this.formulario.get('linkWhatsapp')?.value+"?text=Hola,%20estoy%20interesado%20en%20uno%20de%20sus%20productos",
      linkInstagram : this.formulario.get('linkInstagram')?.value,
      linkFacebook : this.formulario.get('linkFacebook')?.value,
      fileTC : this.formulario.get('fileTC')?.value,
      urlImg : this.formulario.get('urlImg')?.value
    }

    try {
      await updateDoc(docRef, data);
      console.log('Documento actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
    }


  }
  showMenu(){
    console.log("mmene");
    this.dataMenu.classMenu = ""
  }
  closeMenu(){
    console.log("cerrrar");
    this.dataMenu.classMenu = "close"
  }

   setSearch(){
    if (this.dataSearch.classSearch == "hidde") {
      this.dataSearch.classSearch = "search";
      this.dataSearch.closeSearch = () =>{this.closeSearch()}
      this.dataHeader.classHeader = "hidde";
      this.renderer.addClass(document.body, 'bodyBlock');


    }else{
      this.dataSearch.classSearch = "hidde";
      this.dataSearch.closeSearch = () =>{this.closeSearch()}
      this.dataHeader.classHeader = "header";
      this.renderer.removeClass(document.body, 'bodyBlock');
    }
  }
  closeSearch(){
    if (this.dataSearch.classSearch == "search") {
      this.dataSearch.classSearch = "hidde";
      this.dataHeader.classHeader = "header";
      this.renderer.removeClass(document.body, 'bodyBlock');

    }else{
      this.dataSearch.classSearch = "search";
      this.renderer.addClass(document.body, 'bodyBlock');

    }
  }
  redirectNewProduct(){
    this.router.navigate(['/newProduct']);
  }

  //FUNCIONES GET Y SET

  setDataHome(){
    const productRef = collection(this.firestore,'home');
    this.dataHome = {
      descriptionPresentation :"",
      titlePresentation : "",
      linkWhatsapp :" ",
      linkInstagram :"",
      linkFacebook : "",
      fileTC : "",
      urlImg : ""
    }
  }

}
