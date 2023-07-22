import { Component, ElementRef, Query, Renderer2 } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  textSearch : any = "";
  diversProduct : any = [];
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
    this.getCategories();
    this.getDataHome();
    this.getFeaturedProducts();
    this.renderer.removeClass(document.body, 'bodyBlock');
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

  scrollToTitle() {
    const titleMarc = document.getElementById('titleCategory');
    if (titleMarc) {
      titleMarc.scrollIntoView({ behavior: 'smooth' });
    }
  }

  detectChange($event : any){
    console.log($event);
    this.textSearch = $event;
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

  setDataCategory(responseData : any){
    this.dataCategory.data= responseData;
  }
  redirectProducts(id : any, category : any){
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

//----------------set data
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
      console.log("Entro");
      this.getAllProducts();
      this.setAllProducts();
    }else{


      this.dataSearch.classSearch = "hidde";
      this.dataSearch.closeSearch = () =>{this.closeSearch()}
      this.dataHeader.classHeader = "header";
      this.renderer.removeClass(document.body, 'bodyBlock');
    }
  }
  setDataSlider(data : any){
    this.dataSlider.data = data;
  }
  setDataHome(data : any){
    this.dataHome = data;
  }
  async setAllProducts(){
    this.dataSearch.dataCardProduct = await this.diversProduct;
  }
  async addAllProducts(value : any){
    await this.diversProduct?.push(value);
  }


//----------------------services get
  getCategories(){
    this.productServices.getCategories().subscribe((category) => {
      const arrayData : any = [];
      category.map((value : any) =>{
        const data = {
          name: value.name,
          urlImg : value.urlImg,
          redirect : () => {this.redirectCategoryProducts(value.name)}
        }
        arrayData.push(data);
      });
      this.setDataCategory(arrayData);
    });
  }
  getDataHome(){
    this.productServices.getDataHome().subscribe(product=>{
      const arrayData : any = [];
      product.map((value : any) => {
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
      this.setDataHome(arrayData[0]);
    });
  }
  getFeaturedProducts(){
    this.productServices.getFeaturedProducts().subscribe(product=>{
      console.log(product);
      const arrayData : any = [];
      product.map((value : any) => {
        const data =  {
          name : value.name,
          urlImg : value.urlImg,
          value : value.value,
          redirectProduct : () =>{this.redirectProducts(value.id, value.type)}
        }
        arrayData.push(data);

      });
      console.log(arrayData);
      this.setDataSlider(arrayData);
    });
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
              clickProduct :()=>{this.redirectProducts(value?.id,value?.type)}
            }
            this.addAllProducts(data)
          });
        }));
      })
    });
  }

}
