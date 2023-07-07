import { Component, ElementRef, HostListener, Input,Renderer2, ChangeDetectorRef  } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { map } from 'rxjs';
import { collection,doc, onSnapshot, query, where , DocumentSnapshot } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss']
})
export class ProductPage {
  @Input() classMain = "";
  @Input() idProductState : any;
  @Input() idProduct : any;
  @Input() category : any;

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
  @Input() dataSlider = {
    classSlider : "product",
    classDescription : "",
    data :[
      {
        urlImg: "/assets/img/logodragonsolo.svg",
        name : "Nombre",
        value : "48484",
        redirectProduct : () =>{}
      }
    ]
  }
  @Input() dataViewProduct = {
    name :"",
    urlImg : "",
    value : "",
    description : ""
  }
  @Input() dataCardProduct = {
    data : [
      {
        urlImgPrincipalProduct : "",
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
    this.idProductState = navigation?.extras.state as any;
    this.idProduct = this.idProductState.idProduct;
    this.category = navigation?.extras.state as any;
    this.category = this.category.typeCategorie;

    console.log(this.idProduct, this.category);
  }

  ngOnInit(){
    this.getProducts();
    this.setProduct();
  }

  setProduct(){
    if(this.category != undefined){
      console.log(this.category);
      console.log(this.idProduct);

      const prodRef = doc(this.firestore,this.category,this.idProduct);
      console.log(prodRef);

      const prod = onSnapshot(prodRef, (snap) => {
        console.log(snap.data());

        const dataSnap : any = snap.data();
        console.log(dataSnap);
        this.dataViewProduct =  {
          name :dataSnap?.name,
          urlImg : dataSnap?.urlImg,
          value : dataSnap?.value,
          description : dataSnap?.description
        }
        this.dataSlider.data = [
          {
            urlImg: dataSnap?.urlImg,
            name : "",
            value : "",
            redirectProduct : () =>{}
          },
          {
            urlImg: dataSnap?.urlImgSecond,
            name : "",
            value : "",
            redirectProduct : () =>{}
          },
          {
            urlImg:dataSnap?.urlImgThree,
            name : "",
            value : "",
            redirectProduct : () =>{}
          }
        ]
      });
    }
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
  getProducts(){
    const prodRef = collection(this.firestore,this.category);
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
        const data =  {
          id: value.id,
          urlImgPrincipalProduct : value.urlImg,
          textTitle : value.name,
          textDescription :value.description,
          textValue : value.value,
          clickProduct :()=>{this.redirectProducts(value.id)}
        }
        arrayData.push(data);
      });
      this.setDataPrincipalProduct(arrayData);
    });
  }
  setDataPrincipalProduct(responseData : any){
    this.dataCardProduct.data = responseData;
  }
  redirectProducts(id : any){
    window.scrollTo(0, 0);
    const prodRef = doc(this.firestore,this.category,id);
    const prod = onSnapshot(prodRef, (snap) => {
      const dataSnap : any = snap.data();
      this.dataViewProduct = {
          name :dataSnap.name,
          urlImg : dataSnap.urlImg,
          value : dataSnap.value,
          description : dataSnap.description
        }
        console.log(dataSnap);
        this.dataSlider.data = [
          {
            urlImg: dataSnap.urlImg,
            name : "",
            value : "",
            redirectProduct : () =>{}
          },
          {
            urlImg: dataSnap.urlImgSecond,
            name : "",
            value : "",
            redirectProduct : () =>{}
          },
          {
            urlImg:dataSnap.urlImgThree,
            name : "",
            value : "",
            redirectProduct : () =>{}
          }
        ]
    });
  }

}
