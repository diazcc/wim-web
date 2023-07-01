import { Component, ElementRef, HostListener, Input,Renderer2, ChangeDetectorRef  } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { map } from 'rxjs';
import { collection, onSnapshot, DocumentSnapshot, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-galery-page',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss']
})
export class GaleryPage {
  @Input() idNameMarcState : any;
  dataOption = {
    setFilter : () =>{console.log()},
    data : [
      {
        marc :"Marcas"
      }
    ]
  };

  @Input() idNameMarc : any;
  classMain = "";
  dataSearch = {
    classSearch : "hidde",
    closeSearch : () =>{}
  }
   dataHeader = {
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
      textOption1 : "Adidas",
      textOption2 : "Nike",
      textOption3 : "Quest",
      textOption4 : "Puma",
      classMenu : "menu--hidden",
      classContentMenu : "content-menu",
      classOptionMmenu : "option-menu"
    }
  }
  dataCardProduct = {
    data : [
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      }
    ]
  }
  constructor(
    private productServices : ProductServicesService,
    private router : Router,
    private elementRef: ElementRef,
    private renderer : Renderer2,
    private firestore: Firestore,
    private cdr: ChangeDetectorRef
  ){
    const navigation = this.router.getCurrentNavigation();
    this.idNameMarcState = navigation?.extras.state as any;
    this.idNameMarc = this.idNameMarcState?.nameMarc;
    console.log(this.idNameMarc);
  }

  ngOnInit(){
    this.getProducts();

  }

  setSearch(){
    if (this.dataSearch.classSearch == "hidde") {
      this.dataSearch = {
        classSearch : "search",
        closeSearch : () =>{this.closeSearch()}
      }
      this.dataHeader.classHeader = "hidde";
    }else{
      this.dataSearch = {
        classSearch : "hidde",
        closeSearch : () =>{this.closeSearch()}
      }
      this.dataHeader.classHeader = "header";
    }
  }
  closeSearch(){
    if (this.dataSearch.classSearch == "search") {
      this.dataSearch.classSearch = "hidde";
      this.dataHeader.classHeader = "header";
    }else{
      this.dataSearch.classSearch = "search";
    }
  }
  showMenu(){

    if (this.dataHeader.dataNavBar.classMenu=="menu--hidden") {
    this.dataHeader.dataNavBar.classMenu="menu";
    this.classMain = "filterBlur";
    this.dataHeader.urlIconMenu = "assets/icons/close.svg"
    this.dataHeader.classHeader = "focus";
    }else{
    this.dataHeader.dataNavBar.classMenu="menu--hidden";
    this.classMain = "";
    this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
    this.dataHeader.classHeader = "header";
    }
  }
  getProducts(){
    const prodRef = collection(this.firestore,'caps');

    const prod = onSnapshot(prodRef, (snap)=>{
      const product : any[] = [];
      let arrayData : any = [];
      snap.forEach(snapHijo =>{
        console.log(snapHijo.data());
        product.push({
          id: snapHijo.id,
          ...snapHijo.data()
        });
      })
      product.map((value : any) => {
        if (value.marc == this.idNameMarc) {
          console.log("sisas perro este es el service: "+value.marc+ "y el id: "+this.idNameMarc);
          const data =  {
            id: value.id,
            urlImgPrincipalProduct : value.urlImg,
            textTitle : value.name,
            textDescription :value.description,
            textValue : value.value,
            clickProduct :()=>{this.redirectProducts(value.id)}
          }
          console.log("entro");


          arrayData.push(data);
          console.log(arrayData.length);

        }else if(value.marc==""){
          const data =  {
            id: value.id,
            urlImgPrincipalProduct : value.urlImg,
            textTitle : value.name,
            textDescription :value.description,
            textValue : value.value,
            clickProduct :()=>{this.redirectProducts(value.id)}
          }
          arrayData.push(data);
        }
      });
      this.setDataPrincipalProduct(arrayData);

    });
  }

setFilter(){

}

  setDataPrincipalProduct(responseData : any){
    this.dataCardProduct.data = responseData;
  }
  redirectProducts(id : any){
    const data : NavigationExtras = {
      state : {
        idProduct : id
      }
    }
    this.router.navigate(['/product'], data );
  }
}
