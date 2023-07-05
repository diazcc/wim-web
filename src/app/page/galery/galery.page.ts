import { Component, ElementRef, HostListener, Input,Renderer2, ChangeDetectorRef  } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { map } from 'rxjs';
import { collection,doc, onSnapshot, query, where , DocumentSnapshot } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { GaleryTemplate } from 'src/app/components/templates/galery/galery.template';
@Component({
  selector: 'app-galery-page',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss']
})
export class GaleryPage {
  @Input() idNameMarcState : any;
  setFilter = ()=>{}
  dataOption = {
    onChange : () =>{console.log(this.dataSelectOption.selectedOption)},
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
  dataCardProduct = {
    data : [
      {
        urlImgPrincipalProduct : "/assets/img/logodragonsolo.svg",
        textTitle : "- - -",
        textDescription :"- - -",
        textValue : "- - -",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/logodragonsolo.svg",
        textTitle : "- - -",
        textDescription :"- - -",
        textValue : "- - -",
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
    private cdr: ChangeDetectorRef,
    private dataSelectOption : GaleryTemplate
  ){
    const navigation = this.router.getCurrentNavigation();
    this.idNameMarcState = navigation?.extras.state as any;
    this.idNameMarc = this.idNameMarcState?.nameMarc;
  }
  ngOnInit(){
    this.getProducts();
    this.getCategories();

    this.testCategory();
    this.testMarc();
    this.testColor();
    this.testPrice();
  }

  async testCategory(){
    console.log("Hola");
    const categoryRef = collection(this.firestore,'caps');
    const q  = query(categoryRef, where('marc', '==', 'Adidas'));
    const unsubscribe = await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Accede a los datos del documento filtrado
        console.log( doc.data());
      });
    });
  }

  async testMarc(){
    console.log("Hola");
    const categoryRef = collection(this.firestore,'caps');
    const q  = query(categoryRef, where('marc', '==', 'Adidas'));
    const unsubscribe = await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Accede a los datos del documento filtrado
        console.log( doc.data());
      });
    });
  }
  async testColor(){
    console.log("Hola");
    const categoryRef = collection(this.firestore,'caps');
    const q  = query(categoryRef, where('color', '==', 'red'));
    const unsubscribe = await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Accede a los datos del documento filtrado
        console.log( doc.data());
      });
    });
  }
  async testPrice(){
    console.log("Hola");
    const categoryRef = collection(this.firestore,'caps');
    const q  = query(categoryRef, where('value', '>=', 50000), where('value', '<=', 100000));
    const querySnapshot = await onSnapshot(q, (snapshot) => {
      const products :any = [];
      snapshot.forEach((doc) => {

        const product = doc.data();
        products.push(product);
      });

      console.log(products);
    });
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
  getCategories(){
    const categoryRef = collection(this.firestore,'category');
    const prod = onSnapshot(categoryRef, (snap)=>{
      const category : any[] = [];
      let arrayData : any = [];
      snap.forEach(snapHijo =>{
        category.push({
          id: snapHijo.id,
          ...snapHijo.data()
        });
      })
      category.map((value : any) => {
        const data =  {
          marc : value.marc
        }
        arrayData.push(data);
      });
      this.setDataCateogories(arrayData);
    });
  }
  setDataCateogories(value : any){
    this.dataOption.data = value;
  }
  detectChange(dataMarc : string){
    const prodRef = collection(this.firestore,'caps');
    const prod = onSnapshot(prodRef, (snap)=>{
      const product : any[] = [];
      let arrayData : any = [];
      snap.forEach(snapHijo =>{
        product.push({
          id: snapHijo.id,
          ...snapHijo.data()
        });
      })
      product.map((value : any) => {
        if (value.marc == dataMarc) {
          const data =  {
            id: value.id,
            urlImgPrincipalProduct : value.urlImg,
            textTitle : value.name,
            textDescription :value.description,
            textValue : value.value,
            clickProduct :()=>{this.redirectProducts(value.id)}
          }
          arrayData.push(data);
        }else if(value.marc=="" || dataMarc == "Todo"){
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
  getProducts(){
    const prodRef = collection(this.firestore,'caps');
    const prod = onSnapshot(prodRef, (snap)=>{
      const product : any[] = [];
      let arrayData : any = [];
      snap.forEach(snapHijo =>{
        product.push({
          id: snapHijo.id,
          ...snapHijo.data()
        });
      })
      product.map((value : any) => {
        if (value.marc == this.idNameMarc) {
          const data =  {
            id: value.id,
            urlImgPrincipalProduct : value.urlImg,
            textTitle : value.name,
            textDescription :value.description,
            textValue : value.value,
            clickProduct :()=>{this.redirectProducts(value.id)}
          }
          arrayData.push(data);
        }else if(value.marc=="" || this.idNameMarc == undefined){
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
