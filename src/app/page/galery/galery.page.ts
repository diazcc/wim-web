import { Component } from '@angular/core';

@Component({
  selector: 'app-galery-page',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss']
})
export class GaleryPage {
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
      },
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      }
    ]
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
}
