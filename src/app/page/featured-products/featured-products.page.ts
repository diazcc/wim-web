import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.page.html',
  styleUrls: ['./featured-products.page.scss']
})
export class FeaturedProductsPage {
  validateState :  boolean = false;
  textAlert : string = "";
  selectedOption : any = "";
  diversProduct : any = [];
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
  dataAlert = {
    classAlert : "hidden",
    text : ""
  }

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
    private productServices : ProductServicesService,
    private adminService : AdminService

   ){}

   ngOnInit(){

    this.setProducts();
    this.getProducts();
    this.getFeaturedProducts();
    this.getAllProducts();
    this.setDataMenu();
   }
   showMenu(){
    console.log("mmene");
    this.dataMenu.classMenu = ""
  }
  closeMenu(){
    console.log("cerrrar");
    this.dataMenu.classMenu = "close"
  }


  setDataProductsSelected(data : any){
    this.dataProductsSelected = data;
  }


  setProducts(){
    this.dataProducts = this.diversProduct;
  }
  setDataMenu(){
    this.dataMenu  = {
      classMenu : "close",
      closeMenu : ()=>{ this.closeMenu()},
      closeSesion :()=>{this.adminService.logOut()
        .then(()=>{
          this.router.navigate(['/login']);
        })
        .catch(error=>{console.log(error)})
      }
    }
  }

  save(){

    if (this.validate()) {
      console.log(this.dataProductsSelected);
      console.log(this.diversProduct);
      console.log("Se guarda");
      this.productServices.updateFeaturedProducts(this.dataProductsSelected);
      this.dataAlert =  {
        classAlert : "save",
        text : "Se ha guardado correctamente los cambios"
      }
    }else{
      console.log(" no Se guarda");

    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  validate() : boolean{
    if (this.dataProductsSelected.length < 3 ) {
      this.textAlert = "Se debe añadir 3 productos";
      this.validateState = true;
      return false;
    }else {
      this.validateState = false;
      return true;
    }
  }
  deleteProduct(index: number){
    if (index >= 0 && index < this.dataProductsSelected.length) {
      this.dataProductsSelected.splice(index,1);
    }
    console.log(this.dataProductsSelected);
  }


  addProduct(data : any){
    if (this.dataProductsSelected.length < 3 ) {
      console.log(data);
      this.dataProductsSelected.push(data);
      this.validateState = false;
      console.log("se puede");
    }else {
      console.log("no se puede");
      this.validateState = true;
      this.textAlert = "Limite de productos alcanzado, elemina un producto para reemplazarlo";
    }
  }

  setSearch(){
    // if (this.dataSearch.classSearch == "hidde") {
    //   this.dataSearch.classSearch = "search";
    //   this.dataSearch.closeSearch = () =>{this.closeSearch()}
    //   this.dataHeader.classHeader = "hidde";
    //   this.renderer.addClass(document.body, 'bodyBlock');


    // }else{
    //   this.dataSearch.classSearch = "hidde";
    //   this.dataSearch.closeSearch = () =>{this.closeSearch()}
    //   this.dataHeader.classHeader = "header";
    //   this.renderer.removeClass(document.body, 'bodyBlock');
    // }
  }

  getProducts(){
    this.productServices.getProducts("Collares").subscribe((data:any)=>{
      console.log(data);
      const arrayData :any  = [];
      data.map((value:any)=>{
        const data = {
          id: value.id,
          name: value.name,
          type: value.type,
          urlImg: value.urlImg,
          value: value.value
        }
        arrayData.push(data);
      });
      console.log(arrayData);
    });
  }

  getFeaturedProducts(){
    this.productServices.getFeaturedProducts().subscribe((product:any)=>{
      console.log(product);
      this.setDataProductsSelected(product);
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
              urlImg : value?.urlImg,
              name : value?.name,
              type: value.type,
              value : value.value
            }
            this.addAllProducts(data)
          });
        }));
      })
    });
  }

  async addAllProducts(value : any){
    await this.diversProduct?.push(value);
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
