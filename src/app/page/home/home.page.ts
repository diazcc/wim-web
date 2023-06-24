import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  classMain = "";
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

  dataPrincipalProduct = {
    data : [
      {
        urlImgPrincipalProduct : "",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct :()=>{}
      }
    ]
  }

  dataArticlePresentation = {
    icon1 : "",
    icon2 : "",
    icon3 : "",
    icon4 : "",
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
    private renderer : Renderer2
  ){}

  ngOnInit(){
    setTimeout(() => {
      this.dataPresentation.classPresentation = "close";
    }, 1500);
    this.setDataHeader();
    this.setDataArticlePresentation();
    this.setDataSectionPhotos();
    this.getPrincipalProducts();


  }
  ngAfterViewInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      icon1 : "assets/icons/adidas.svg",
      icon2 : "assets/icons/nike.svg",
      icon3 : "assets/icons/puma.svg",
      icon4 : "assets/icons/quest.png",
    }
  }

  getPrincipalProducts(){
    this.productServices.getCaps().pipe(map((response)=>{
      let arrayData : any = [];
      console.log(response);
      response.map((value : any) => {
        const data =  {
          urlImgPrincipalProduct : value.urlImg,
          textTitle : value.name,
          textDescription :value.description,
          textValue : value.value,
          clickProduct :()=>{}
        }
        arrayData.push(data);
        console.log(arrayData);
      });
      const responseData = arrayData;
      return response = responseData;
    })).subscribe((response)=>{
      console.log(response);
      this.setDataPrincipalProduct(response);
    });
  }

  setDataPrincipalProduct(responseData : any){
    this.dataPrincipalProduct.data = responseData;
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

  redirectProducts(){
    this.router.navigate(['/product']);
    console.log("Cliskscs");
  }
}
