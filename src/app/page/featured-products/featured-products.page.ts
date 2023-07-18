import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.page.html',
  styleUrls: ['./featured-products.page.scss']
})
export class FeaturedProductsPage {
  selectedOption : any = "";

  dataProductsSelected : any =[
    {
      id : "",
      name :"Producto"
    }
  ]
  dataProducts : any = [
    {
      id : "",
      name :"Producto"
    }
  ]

  dataMenu  = {
    classMenu : "close",
    closeMenu : ()=>{ this.closeMenu()},
    closeSesion :()=>{}
  }
  alertForm = "";
  classForm = "";
  dataCategory =[
    {
      id : "",
      name : "",
      urlImg : "",
    }
  ];

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

   constructor(
    private renderer : Renderer2,
    private storage : Storage,
    private router : Router,
    private productServices : ProductServicesService

   ){}

   ngOnInit(){
    this.setDataProductsSelected()
    this.setProducts();
   }
   showMenu(){
    console.log("mmene");
    this.dataMenu.classMenu = ""
  }
  closeMenu(){
    console.log("cerrrar");
    this.dataMenu.classMenu = "close"
  }


setDataProductsSelected(){
  this.dataProductsSelected = [
    {
      id : "adadq33d",
      name : "Gorras Beisbolera 1"
    },{
      id : "adadq33d",
      name : "Gorras Beisbolera 2"
    }
    ,{
      id : "adadq33d",
      name : "Gorras Beisbolera 3"
    }
  ]
}

setProducts(){
  this.dataProducts = [
    {
      id : "adadq33d",
      name : "PLanas Beisbolera 3"
    },
    {
      id : "adadq33d",
      name : "Firmes Beisbolera 3"
    },
    {
      id : "adadq33d",
      name : "Pruebas Beisbolera 3"
    },
    {
      id : "adadq33d",
      name : "Blancas Beisbolera 3"
    },
    {
      id : "adadq33d",
      name : "PLanas Beisbolera 3"
    },
    {
      id : "adadq33d",
      name : "Negras Beisbolera 3"
    }
  ]
}

save(){
  console.log(this.dataProductsSelected);
}
deleteProduct(index: number){
  if (index >= 0 && index < this.dataProductsSelected.length) {
    this.dataProductsSelected.splice(index,1);
  }
  console.log(this.dataProductsSelected);
}


addProduct(data : any){
  console.log(data);
  this.dataProductsSelected.push(data);
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


  //_-------get











}
