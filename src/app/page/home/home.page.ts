import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { collection, onSnapshot, DocumentSnapshot } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  dataMain = {
    classMain : "",
    clickMore : () =>{this.seeMoreProducts()}
  }
  classSearch = "hidde";
  previousScrollPosition = 0;

  dataSearch = {
    classSearch : "hidde",
    closeSearch : () =>{}
   }

  dataPresentation = {
    classPresentation : ""
  }

  dataSectionPhotos = {
    textTitle : "Nuevos estilos",
    urlImg1 : "",
    urlImg2 : "",
    urlImg3 : "",
    urlImg4 : "",
  }

  // dataCardProduct = {
  //   data : [
  //     {
  //       urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
  //       textTitle : "",
  //       textDescription :"",
  //       textValue : "",
  //       clickProduct : () =>{}
  //     }
  //   ]
  // }

  dataArticlePresentation = {
    title: "",
    description : "",
    redirect : () =>{}
  }

  dataHeader = {
    textTitle :"",
    urlIconMenu: "",
    classHeader :"",
    classContentHeader :"",
    classIconMenu :"",
    classIconMenu2 :"",
    classHeaderTitulo :"",
    clickHeader : () => {},
    clickSearch : () => {},
    dataNavBar : {
      textOption1 : "",
      textOption2 : "",
      textOption3 : "",
      textOption4 : "",
      classMenu : "",
      classContentMenu : "",
      classOptionMmenu : ""
    }
  }
  ayaya :string ="";
  constructor(
    private productServices : ProductServicesService,
    private router : Router,
    private elementRef: ElementRef,
    private renderer : Renderer2,
    private firestore: Firestore
  ){}

  ngOnInit(){
    setTimeout(() => {
      this.dataPresentation.classPresentation = "close";
    }, 1500);
    this.setDataHeader();
    this.setDataArticlePresentation();
    this.setDataSectionPhotos();
    // this.getProducts();

  }
  ngAfterViewInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


showMenu(){

  if (this.dataHeader.dataNavBar.classMenu=="menu--hidden") {
  this.dataHeader.dataNavBar.classMenu="menu";
  this.dataMain.classMain = "filterBlur";
  this.dataHeader.urlIconMenu = "assets/icons/close.svg"
  this.dataHeader.classHeader = "focus";
  }else{
  this.dataHeader.dataNavBar.classMenu="menu--hidden";
  this.dataMain.classMain = "";
  this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
  this.dataHeader.classHeader = "header";
  }
}

  setDataHeader(){
    this.dataHeader = {
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
  setDataArticlePresentation(){
    this.dataArticlePresentation = {
      title: "Bienvenidos a Infinity Industry",
      description : "Conoce mas sobre nosotros!",
      redirect : () =>{console.log("JUJUUJJU")}
   }
  }




  // getProducts(){
  //   const prodRef = collection(this.firestore,'caps');
  //   const prod = onSnapshot(prodRef, (snap)=>{
  //     const product : any[] = [];
  //     let arrayData : any = [];
  //     snap.forEach(snapHijo =>{
  //       product.push({
  //         id: snapHijo.id,
  //         ...snapHijo.data()
  //       });
  //     })
  //     product.map((value : any) => {
  //       const data =  {
  //         id: value.id,
  //         urlImgPrincipalProduct : value.urlImg,
  //         textTitle : value.name,
  //         textDescription :value.description,
  //         textValue : value.value,
  //         clickProduct :()=>{this.redirectProducts(value.id)}
  //       }
  //       arrayData.push(data);
  //     });
  //     this.setDataPrincipalProduct(arrayData);

  //   });
  // }

  // setDataPrincipalProduct(responseData : any){
  //   this.dataCardProduct.data = responseData;
  // }

  setDataSectionPhotos(){
    this.dataSectionPhotos = {
      textTitle : "Nuevos estilos",
      urlImg1 : "/assets/img/default-photoart.jpg",
      urlImg2 : "/assets/img/default-photoart2.jpg",
      urlImg3 : "/assets/img/default-photoart3.jpg",
      urlImg4 : "/assets/img/default-photoart4.jpg",
    }
  }

  redirectProducts(id : any){
    // this.router.navigate(['/product']);

    console.log("Aqui se redirge la pagina con el id "+ id);
    const data : NavigationExtras = {
      state : {
        idProduct : id
      }
    }
    this.router.navigate(['/product'], data );

  }

  seeMoreProducts(){
    this.router.navigate(['/galery']);
  }
}
