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
  nameMarc : any;
  dataCategory ={
    titleCategory : "Marcas",
    data : [
      {
        nameMarc : "Marca",
        urlImg : "/assets/img/cap.png",
        redirect : () => {}
      }

    ]
  }
  dataMain = {
    classMain : "",
    clickMore : () =>{this.seeMoreProducts()}
  }
  classSearch = "hidde";
  previousScrollPosition = 0;

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
    this.getCategories();

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
        textOption1 : "Todos los productos",
        textOption2 : "Marcas",
        textOption3 : "Contactanos",
        classMenu : "menu--hidden",
        classContentMenu : "content-menu",
        classOptionMmenu : "option-menu"
      }
    }
  }


  setSearch(){
    if (this.dataSearch.classSearch == "hidde") {
      this.dataSearch.classSearch = "search";
      this.dataSearch.closeSearch = () =>{this.closeSearch()}
      this.dataHeader.classHeader = "hidde";
    }else{
      this.dataSearch.classSearch = "hidde";
      this.dataSearch.closeSearch = () =>{this.closeSearch()}
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
      redirect : () =>{
        this.scrollToTitle();
      }
   }
  }
  scrollToTitle() {
    const titleMarc = document.getElementById('titleCategory');
    if (titleMarc) {
      titleMarc.scrollIntoView({ behavior: 'smooth' });
    }
  }
  setDataSectionPhotos(){
    this.dataSectionPhotos = {
      textTitle : "Nuevos estilos",
      urlImg1 : "/assets/img/default-photoart.jpg",
      urlImg2 : "/assets/img/default-photoart2.jpg",
      urlImg3 : "/assets/img/default-photoart3.jpg",
      urlImg4 : "/assets/img/default-photoart4.jpg",
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
          nameMarc : value.marc,
          urlImg : value.urlImg,
          redirect : () => {this.redirectProducts(value.marc)}
        }
        arrayData.push(data);
      });
      this.setDataCategory(arrayData);
    });
  }
  setDataCategory(responseData : any){
    this.dataCategory.data= responseData;
  }
  redirectProducts(id : any){
    const data : NavigationExtras = {
      state : {
        nameMarc : id
      }
    }
    this.router.navigate(['/galery'], data );
  }
  seeMoreProducts(){
    this.router.navigate(['/galery']);
  }
}
