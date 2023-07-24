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
  whatsApp : string = "";
  diversProduct : any = [];
  textSearch : any = "";
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
      redirectContact : () =>{this.redirectContact()},
      redirectMarcs : () =>{}
    }
  }
  @Input() dataViewProduct = {
    name :"",
    urlImg : "",
    value : "",
    description : "",
    redirectWpp : () =>{}
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
  @Input() dataFooter = {
    linkWhatsapp : "",
    linkFacebook : "",
    linkInstagram : "",
    urlTC : ""
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
    this.getDataFooter();
    this.setProduct();
    this.getWhatsapp();
    this.renderer.removeClass(document.body, 'bodyBlock');
  }
  getWhatsapp(){
    this.productServices.getDataHome().subscribe(response =>{
      console.log(response);
      console.log(response[0].whatsApp);
      this.whatsApp = response[0].whatsApp;
    });
  }

  redirecWhatsapp(product : any, description :any, value : any){
    const url = "https://wa.me/+57"+this.whatsApp+"?text=Hola,%20estoy%20interesado%20en%20"+product+" "+description+" que tiene un valor de: $"+value;
    window.location.href = url;
  }
  async setAllProducts(){
    this.dataSearch.dataCardProduct = await this.diversProduct;
  }
  async addAllProducts(value : any){
    await this.diversProduct?.push(value);
  }

  async setProduct(){
    if(this.category != undefined){
      console.log(this.category);
      console.log(this.idProduct);

      const prodRef = await doc(this.firestore,this.category,this.idProduct);

      console.log(prodRef);

      const prod = onSnapshot(prodRef, (snap) => {
        console.log(snap.data());

        const dataSnap : any = snap.data();
        console.log(dataSnap);
        this.dataViewProduct =  {
          name :dataSnap?.name,
          urlImg : dataSnap?.urlImg,
          value : dataSnap?.value,
          description : dataSnap?.description,
          redirectWpp : () =>{ this.redirecWhatsapp(dataSnap?.name,dataSnap?.description,dataSnap?.value)}
        }
      });
    }
  }


  setSearch(){
    if (this.dataSearch.classSearch == "hidde") {
      this.dataSearch.classSearch = "search";
      this.dataSearch.closeSearch = () =>{this.closeSearch()}
      this.dataHeader.classHeader = "hidde";
      this.renderer.addClass(document.body, 'bodyBlock');
      this.getAllProducts();
      this.setAllProducts();
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
      this.diversProduct.splice(0,this.diversProduct.length);
      this.dataSearch.dataCardProduct.splice(0,this.dataSearch.dataCardProduct.length)

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
  redirectContact(){
    this.dataHeader.dataNavBar.classMenu="menu--hidden";
    this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
    this.dataHeader.classHeader = "header";
    this.classMain = "";
    const titleContacts = document.getElementById('contacts');
    setTimeout(() => {
      if (titleContacts) {
        titleContacts.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);

  }

  detectChange($event : any){
    this.textSearch = $event;
    console.log($event);
    this.searchProduct();
  }
  searchProduct(){
    if (!this.textSearch) {
      this.dataSearch.dataCardProduct = this.diversProduct;
      console.log("Se setea");
      console.log("Se muestra todos los productos");
    } else {
      this.dataSearch.dataCardProduct = this.dataSearch.dataCardProduct.filter((z:any) =>{
        return z.textTitle.toLowerCase().includes(this.textSearch.toLowerCase())
      });
      console.log("Se setea");
      console.log(this.dataSearch.dataCardProduct);
    }
  }

  getAllProducts(){
    this.productServices.getCategories().subscribe((category) => {
      const arrayData : any = [];
      category.map((value : any) =>{
        const data = {
          marc: value.name
        }
        arrayData.push(data);
      });
      arrayData.map((value : any) =>{
        const allProduct: any = [];
        this.productServices.getProducts(value.marc).subscribe((product =>{
          product.map((value:any)=>{
            const data =  {
              id: value.id,
              urlImgPrincipalProduct : value?.urlImg,
              textTitle : value?.name,
              textDescription :value?.description,
              textValue : value?.value,
              clickProduct :()=>{
                this.redirectProducts(value?.id);
                this.closeSearch();
              }
            }
            this.addAllProducts(data)
          });
        }));
      })
    });
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
          description : dataSnap.description,
          redirectWpp : () =>{this.redirecWhatsapp(dataSnap?.name,dataSnap?.description,dataSnap?.value)}
        }
        console.log(dataSnap);
    });
  }

  getDataFooter(){
    let dataFooter = {
      linkWhatsapp : "https://www.facebook.com/Andres.DiasCastillo/",
      linkFacebook : "",
      linkInstagram : "",
      urlTC : ""
    }
    console.log("Init getData");
    const principalDataRef = collection(this.firestore,'home');
    console.log(principalDataRef);
    const prod = onSnapshot(principalDataRef, (snap)=>{
    console.log(snap);
      const featProd : any[] = [];
      let arrayData : any = [];
      snap.forEach(snapHijo =>{
        console.log(snapHijo.data());
        featProd.push({
          idFeat: snapHijo.id,
          ...snapHijo.data()
        });
      })
      console.log(featProd);
      featProd.map((value : any) => {
        const data =  {
            linkWhatsapp : value.linkWhatsapp,
            linkFacebook : value.linkFacebook,
            linkInstagram : value.linkInstagram,
            urlTC : ""
        }
        arrayData?.push(data);
      });
      console.log(arrayData);
      console.log(arrayData[0]);
      dataFooter = arrayData[0];
      console.log(dataFooter);
      this.setDataFooter(dataFooter);
    });
  }
  setDataFooter(data : any){
    console.log(data);
    this.dataFooter = data;
  }
}
