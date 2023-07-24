import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { collection, onSnapshot, query, where , DocumentSnapshot, addDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';
import { NavigationExtras, Router } from '@angular/router';
import { AdminRoutingModule } from '../adminitration/admin-routing.module';
import { AdminService } from 'src/app/services/admin.service';
import { ProductServicesService } from 'src/app/services/product-services.service';


@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.page.html',
  styleUrls: ['./new-category.page.scss']
})
export class NewCategoryPage {
  diversProduct : any = [];
  dataMenu  = {
    classMenu : "close",
    closeMenu : ()=>{ this.closeMenu()},
    closeSesion :()=>{}
  }
  fileImg  :any;
  urlImage : any;
  categorySelect : any;
  alertForm = "";
  classForm = "";
  dataCategory : any;
  formulario: FormGroup;
  private name : string ="";
  private urlImg : string ="";
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
   dataAlert = {
    classAlert : "hidden",
    text : ""
  }

   constructor(
    private renderer : Renderer2,
    private firestore: Firestore,
    private storage : Storage,
    private router : Router,
    private adminService : AdminService,
    private productService : ProductServicesService

   ){
    this.formulario = new FormGroup({
      name : new FormControl(),
      urlImg : new FormControl()
    })
   }

   ngOnInit(){
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

   uploadImage($event: any) {
    this.fileImg = $event.target.files[0];
    console.log(this.fileImg);
    console.log(this.formulario.get('category')?.value);
  }


  onSubmit(){
    console.log(this.urlImage);
    console.log(this.formulario.value);
    this.setImg();
    this.dataAlert =  {
      classAlert : "save",
      text : "Se ha guardado correctamente los cambios"
    }
  }

  getAllProducts(){
    this.productService.getCategories().subscribe((category) => {
      const arrayData : any = [];
      category.map((value : any) =>{
        const data = {
          marc: value.name
        }
        arrayData.push(data);
      });
      arrayData.map((value : any) =>{
        const allProduct: any = [];
        this.productService.getProducts(value.marc).subscribe((product =>{
          product.map((value:any)=>{
            const data =  {
              id: value.id,
              urlImgPrincipalProduct : value?.urlImg,
              textTitle : value?.name,
              textDescription :value?.description,
              textValue : value.value,
              clickProduct : () =>{
                this.redirectUpdateProduct(value.id, value.type);
              }
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
  setDataProduct(){
    this.dataSearch.dataCardProduct = this.diversProduct;
    console.log("Se setea");
    console.log(this.diversProduct);
  }
  redirectUpdateProduct(id : any, type : any){
    const data : NavigationExtras = {
      state : {
        idProduct : id,
        category : type
      }
    }
    console.log(type);
    this.router.navigate(['/admProduct'], data );
  }
  setImg(){
    if (this.fileImg!= undefined) {
      const filePath = this.fileImg.name;
      const fileRef = ref(this.storage, filePath);
      uploadBytes(fileRef, this.fileImg)
      .then(response => getDownloadURL(fileRef))
      .then((url:any) =>{
        this.urlImage = url;
        console.log(url);
        console.log(this.urlImage);
        this.setUrlImg(url);
      })
      .catch(error => console.log(error))
    }else{
      console.log(false)
    }
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
  setNewCategory(url : any){
    const productRef = collection(this.firestore,'category');
    this.formulario.value.urlImg = url;
    console.log(url);
    addDoc(productRef,this.formulario.value);
    this.formulario.reset();
  }

  async setUrlImg(url : any){
    this.urlImage = await url;
    console.log(this.urlImage);
    this.setNewCategory(url);
  }

   setSearch(){
    if (this.dataSearch.classSearch == "hidde") {
      this.getAllProducts();
      this.dataSearch.classSearch = "search";
      this.dataSearch.closeSearch = () =>{this.closeSearch()}
      this.dataHeader.classHeader = "hidde";
      this.renderer.addClass(document.body, 'bodyBlock');

      this.setDataProduct();

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
      this.dataSearch.dataCardProduct.splice(0,this.dataSearch.dataCardProduct.length);
    }else{
      this.dataSearch.classSearch = "search";
      this.renderer.addClass(document.body, 'bodyBlock');

    }
  }
  redirectNewProduct(){
    this.router.navigate(['/newProduct']);
  }
}
