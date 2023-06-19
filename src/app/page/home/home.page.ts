import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  classMain = "main";


  dataPresentation = {
    classPresentation : ""
  }

  dataSectionPhotos = {
    textTitle : "",
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

  constructor(
    private productServices : ProductServicesService,
    private router : Router
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


showMenu(){
if (this.dataHeader.dataNavBar.classMenu=="menu--hidden") {
this.dataHeader.dataNavBar.classMenu="menu";
this.classMain = "main filterBlur";
this.dataHeader.urlIconMenu = "assets/icons/close.svg"
}else{
this.dataHeader.dataNavBar.classMenu="menu--hidden";
this.classMain = "main";
this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
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

  setDataArticlePresentation(){
    this.dataArticlePresentation = {
      icon1 : "assets/icons/adidas.svg",
      icon2 : "assets/icons/nike.svg",
      icon3 : "assets/icons/puma.svg",
      icon4 : "assets/icons/quest.png",
    }
  }

  getPrincipalProducts(){
    this.productServices.getProducts().pipe(map((response)=>{
      console.log(response);
      let arrayData : any[]= [];
      response.products.map((value : any) => {
        const data =  {
          urlImgPrincipalProduct : value.urlImg,
          textTitle : value.textTitle,
          textDescription :value.textDescription,
          textValue : value.value
        }
        arrayData.push(data);
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
    console.log(this.dataPrincipalProduct.data = responseData);
  }

  setDataSectionPhotos(){
    this.dataSectionPhotos = {
      textTitle : "",
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
