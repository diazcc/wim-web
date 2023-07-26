import { Component, ElementRef, HostListener, Input,Renderer2, ChangeDetectorRef  } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';
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
  textInput : any;
  textInputSearch : any;
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
    console.log(this.idNameCategory);
  }
  ngOnInit(){
    this.validateRefData();
    this.getFooter();
    this.getCategories();
    this.renderer.removeClass(document.body, 'bodyBlock');
  }

  ngOnChanges(){
    console.log("Algo se movio");
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
      this.dataSearch.dataCardProduct = this.diversProduct;
      this.dataSearch.classSearch = "search";
      this.dataSearch.closeSearch = () =>{this.closeSearch()}
      this.dataHeader.classHeader = "hidde";
      this.renderer.addClass(document.body, 'bodyBlock');
      console.log(this.diversProduct);
      this.setDataSearch();

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
      console.log("Cerro");
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

  setDataSearch(){
    this.dataSearch.dataCardProduct = this.diversProduct;
    console.log("Se setea");
    console.log(this.diversProduct);
  }

  detectChange(optionSelect : string){
    if (optionSelect=="Todo") {
    console.log("Se ssdasdasdastea");
      this.diversProduct = []
      this.getAllProducts();
      this.setAllProducts();
    }else{
      this.productServices.getProducts(optionSelect).subscribe((value:any)=>{
        const arrayData : any = [];
        value.map((value :any) =>{
          const data =  {
            id: value.id,
            urlImgPrincipalProduct : value.urlImg,
            textTitle : value.name,
            textDescription :value.description,
            textValue : value.value,
            clickProduct :()=>{this.redirectProducts(value.id,value.type)}
          }
          arrayData.push(data);
        })
        console.log(arrayData);
        this.setProduct(arrayData);
      });
    }
  }

  detectChangeInput(textInput : string){
    console.log(textInput);
    this.textInput = textInput;
    this.searchProductPrincipal();
  }
  detectChangeInputSearch($event : any){
    console.log($event);
    this.textInputSearch = $event;
    this.searchProduct();
  }
  searchProduct(){
    if (!this.textInputSearch) {
      this.dataSearch.dataCardProduct = this.diversProduct;
      console.log("Se setea");
      console.log("Se muestra todos los productos");
    } else {
      this.dataSearch.dataCardProduct = this.dataSearch.dataCardProduct.filter((z:any) =>{
        return z.textTitle.toLowerCase().includes(this.textInputSearch.toLowerCase())
      });
      console.log("Se setea");
      console.log(this.dataSearch.dataCardProduct);
    }
  }

  searchProductPrincipal(){
    if (!this.textInput) {
      this.dataCardProduct.data = this.diversProduct;
      console.log("Se setea");
      console.log("Se muestra todos los productos");
    } else {
      this.dataCardProduct.data = this.dataCardProduct.data.filter((z:any) =>{
        return z.textTitle.toLowerCase().includes(this.textInput.toLowerCase())
      });
      console.log("Se setea");
      console.log(this.dataSearch.dataCardProduct);
    }
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

  validateRefData(){
    if (this.idNameCategory == " " ||this.idNameCategory ==undefined) {
    console.log("enter");
      this.getAllProducts();
      this.setAllProducts();
    }else{
      this.getProducts(this.idNameCategory);
    console.log("exit");

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
      this.setProduct(arrayData);
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

  //----------- set


  async addAllProducts(value : any){
    console.log("Se ssdasdasdastea");
    await this.diversProduct?.push(value);
  }

  async setAllProducts(){
    this.dataCardProduct.data = await this.diversProduct;
    console.log(this.diversProduct);
  }

  setProduct(responseData : any){
    this.dataCardProduct.data = responseData;
  }

  setDataCategories(value : any){
    this.dataOption.data = value;
  }
  async setDataFooter(data : any){
    this.dataFooter = await data;
  }
}
