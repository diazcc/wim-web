import { Component, ElementRef, Query, Renderer2 } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { collection, onSnapshot, query, where , DocumentSnapshot } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  nameMarc : any;
  dataCategory ={
    titleCategory : "Categorias",
    data : [
      {
        name : "Marca",
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
  dataSlider = {
    classSlider : "",
    classDescription : "",
    data :[
      {
        urlImg: "/assets/img/cap.png",
        name : "Jamaicana",
        value : "3500",
        redirectProduct : () =>{}
      },
      {
        urlImg: "/assets/img/logoconletra.svg",
        name : "Sisors",
        value : "5800",
        redirectProduct : () =>{}
      },
      {
        urlImg: "/assets/img/gorra-principal.jpg",
        name : "Gorra nike",
        value : "700",
        redirectProduct : () =>{}
      }
    ]
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
      classOptionMmenu : "",
      redirectContact : () =>{},
      redirectMarcs : () =>{}
    }
  }

  dataFooter = {
    linkWhatsapp : "",
    linkFacebook : "",
    linkInstagram : "",
    urlTC : ""
  }

  dataHome = {
    dataArticlePresentation : {
      title: "",
      description : "",
      redirect : () =>{}
    },
    dataFooter : {
      linkWhatsapp : "",
      linkFacebook : "",
      linkInstagram : "",
      urlTC : ""
    }
  }

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
    // this.setDataArticlePresentation();
    this.setDataSectionPhotos();
    this.getCategories();
    this.getFeaturedProducts()
    this.getDataHome();

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
        classOptionMmenu : "option-menu",
        redirectContact : () =>{this.redirectContact()},
        redirectMarcs : () =>{this.redirectCategory()}
      }
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

  getDataHome(){
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
          dataArticlePresentation : {
            title: value?.titlePresentation,
            description : value.descriptionPresentation,
            redirect : () =>{this.scrollToTitle();}
          },
          dataFooter : {
            linkWhatsapp : value.linkWhatsapp,
            linkFacebook : value.linkFacebook,
            linkInstagram : value.linkInstagram,
            urlTC : value.fileTC
          }
        }
        arrayData?.push(data);

      });
      console.log(arrayData);
      console.log(arrayData[0]);

      // this.setDataSlider(arrayData);
      this.setDataHome(arrayData[0]);
    });
  }

  setDataHome(data : any){
    console.log(this.dataHome);
    console.log(data);

    this.dataHome = data;
    console.log(this.dataHome);


  }

  // setDataArticlePresentation(){
  //   this.dataHome.dataArticlePresentation = {
  //     title: "Bienvenidos a Infinity Industry",
  //     description : "Conoce mas sobre nosotros!",
  //     redirect : () =>{
  //       this.scrollToTitle();
  //     }
  //  }
  // }
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

  getFeaturedProducts(){
    const featProdRef = collection(this.firestore,'featuredProducts');
    const prod = onSnapshot(featProdRef, (snap)=>{
      const featProd : any[] = [];
      let arrayData : any = [];
      snap.forEach(snapHijo =>{

        featProd.push({
          idFeat: snapHijo.id,
          ...snapHijo.data()
        });
      })

      featProd.map((value : any) => {
        const data =  {
          name : value.name,
          urlImg : value.urlImg,
          value : value.value,
          redirectProduct : () =>{this.redirectProducts(value.id, value.type)}
        }
        arrayData.push(data);

      });
      this.setDataSlider(arrayData);
    });
  }

  setDataSlider(data : any){
    this.dataSlider.data = data;
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
          name : value.name,
          urlImg : value.urlImg,
          redirect : () => {this.redirectCategoryProducts(value.name)}
        }
        arrayData.push(data);
      });
      this.setDataCategory(arrayData);
    });
  }



  setDataCategory(responseData : any){
    this.dataCategory.data= responseData;
  }
  redirectProducts(id : any, category : any){
    console.log(id,category);

    const data : NavigationExtras = {
      state : {
        idProduct : id,
        typeCategorie : category
      }
    }
    this.router.navigate(['/product'], data );
  }
  redirectCategoryProducts(id : any){
    const data : NavigationExtras = {
      state : {
        nameCategory : id
      }
    }
    this.router.navigate(['/galery'], data );
  }
  redirectContact(){
    this.dataHeader.dataNavBar.classMenu="menu--hidden";
    this.dataMain.classMain = "";
    this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
    this.dataHeader.classHeader = "header";
    const titleContacts = document.getElementById('contacts');
    setTimeout(() => {
      if (titleContacts) {
        titleContacts.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);

  }
  redirectCategory(){
    this.dataHeader.dataNavBar.classMenu="menu--hidden";
    this.dataMain.classMain = "";
    this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
    this.dataHeader.classHeader = "header";
    const titleContacts = document.getElementById('titleCategory');
    setTimeout(() => {
      if (titleContacts) {
        titleContacts.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);

  }
  seeMoreProducts(){
    this.router.navigate(['/galery']);
  }
}
