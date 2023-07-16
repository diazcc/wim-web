import { Component, ElementRef, HostListener, Input,Renderer2, ChangeDetectorRef  } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';
// import { collection,doc, onSnapshot, query, where , DocumentSnapshot } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { GaleryTemplate } from 'src/app/components/templates/galery/galery.template';
@Component({
  selector: 'app-galery-page',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss']
})
export class GaleryPage {
  @Input() idNameCategoryState : any;
  diversProduct : any = [];

  dataOption = {
    onChange : () =>{console.log(this.dataSelectOption.selectedOption)},
    data : [
      {
        marc :"Marcas"
      }
    ]
  };
  @Input() idNameCategory : any;
  classMain = "";
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
      textOption1 : "Todos los productos",
      textOption2 : "Marcas",
      textOption3 : "Contactanos",
      classMenu : "menu--hidden",
      classContentMenu : "content-menu",
      classOptionMmenu : "option-menu",
      redirectContact : () =>{this.redirectCategory()},
      redirectMarcs : () =>{}
    }
  }
  dataCardProduct = {
    data : [
      {
        urlImgPrincipalProduct : "/assets/img/logodragonsolo.svg",
        textTitle : "- - -",
        textDescription :"- - -",
        textValue : "- - -",
        clickProduct : () =>{}
      },
      {
        urlImgPrincipalProduct : "/assets/img/logodragonsolo.svg",
        textTitle : "- - -",
        textDescription :"- - -",
        textValue : "- - -",
        clickProduct : () =>{}
      }
    ]
  }
  dataFooter = {
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
    private cdr: ChangeDetectorRef,
    private dataSelectOption : GaleryTemplate
  ){
    const navigation = this.router.getCurrentNavigation();
    this.idNameCategoryState = navigation?.extras.state as any;
    this.idNameCategory = this.idNameCategoryState?.nameCategory;
    console.log(this.idNameCategory,this.idNameCategoryState);
  }
  ngOnInit(){
    this.validateRefData();
    this.getFooter();
    this.getCategories();
  }


  redirectCategory(){
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

  detectChange(optionSelect : string){
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
  //       if (value.marc == optionSelect) {
  //         const data =  {
  //           id: value.id,
  //           urlImgPrincipalProduct : value.urlImg,
  //           textTitle : value.name,
  //           textDescription :value.description,
  //           textValue : value.value,
  //           clickProduct :()=>{this.redirectProducts(value.id,value.type)}
  //         }
  //         arrayData.push(data);
  //       }else if(value.marc=="" || optionSelect == "Todo"){
  //         const data =  {
  //           id: value.id,
  //           urlImgPrincipalProduct : value.urlImg,
  //           textTitle : value.name,
  //           textDescription :value.description,
  //           textValue : value.value,
  //           clickProduct :()=>{this.redirectProducts(value.id,value.type)}
  //         }
  //         arrayData.push(data);
  //       }
  //     });
  //     this.setProduct(arrayData);
  //   });
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

  validateRefData(){
    if (this.idNameCategory == " " ||this.idNameCategory ==undefined) {
      console.log("Se muestra todo los productos");
      this.getAllProducts();
    }else{
      console.log("Se muestra el producto de la categoria");
      this.getProducts(this.idNameCategory);
    }
  }

  //-----------get services


  getFooter(){
    this.productServices.getDataHome().subscribe((dataHome) => {
      const arrayData : any = [];
      dataHome.map((value : any) =>{
        const data = {
          linkWhatsapp : value.linkWhatsapp,
          linkFacebook : value.linkFacebook,
          linkInstagram : value.linkInstagram,
          urlTC : value.fileTC
        }
        arrayData.push(data);
      });
      console.log(arrayData[0]);
      this.setDataFooter(arrayData[0]);
    });
  }

  getCategories(){
    this.productServices.getCategories().subscribe((category) => {
      const arrayData : any = [];
      category.map((value : any) =>{
        const data = {
          marc: value.name
        }
        arrayData.push(data);
      });
      this.setDataCategories(arrayData);
    });
  }

  getProducts(category : any){
    this.productServices.getProducts(category).subscribe((products) => {
      const arrayData : any = [];
      console.log(products);
      products.map((value : any) =>{
        const data =  {
          id: value.id,
          urlImgPrincipalProduct : value.urlImg,
          textTitle : value.name,
          textDescription :value.description,
          textValue : value.value,
          clickProduct :()=>{this.redirectProducts(value.id,value.type)}
        }
        arrayData.push(data);
      });
      console.log(arrayData);
      // this.setDataCategories(arrayData);
      this.setProduct(arrayData);
    });
  }

  //----------- set
  getAllProducts(){
    this.productServices.getCategories().subscribe((category) => {
      const arrayData : any = [];
      category.map((value : any) =>{
        const data = {
          marc: value.name
        }
        arrayData.push(data);
      });
      console.log(arrayData);
      arrayData.map((value : any) =>{
        const allProduct: any = [];
      console.log(value);
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
            this.setAllProducts(data)
          });
        }));
        console.log(allProduct);
      })
      console.log(this.diversProduct);
    });
  }

  async setAllProducts(value : any){
    console.log(value);
    await this.diversProduct?.push(value);
    console.log(this.diversProduct);
    this.setProduct( await this.diversProduct);
  }


  setProduct(responseData : any){
    this.dataCardProduct.data = responseData;
    console.log(this.dataCardProduct.data);
  }
  setDataCategories(value : any){
    this.dataOption.data = value;
  }
  async setDataFooter(data : any){
    this.dataFooter = await data;
  }
}
