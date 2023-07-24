import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { collection, onSnapshot, query, where , DocumentSnapshot, addDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';
import { AdminService } from 'src/app/services/admin.service';
import { NavigationExtras, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss']
})
export class NewProductPage {
  diversProduct : any = [];
  validateState :  boolean = false;
  textAlert : string = "";
  dataMenu  = {
    classMenu : "close",
    closeMenu : ()=>{ this.closeMenu()},
    closeSesion :()=>{}
  }
  dataForm = {
    name :" ",
    description : "",
    value : "",
    marc : "",
    file : ""
  }
  dataAlert = {
    classAlert : "hidden",
    text : "Se ha creado correctamente"
  }
fileImg  :any;
  urlImage : any;
  categorySelect : any;
  alertForm = "";
  classForm = "";
  dataCategory : any;
  formulario: FormGroup;
  private name : string ="";
  private description : string ="";
  private value : string ="";
  private marc : string ="";
  private type : string ="";
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

   constructor(
    private renderer : Renderer2,
    private firestore: Firestore,
    private storage : Storage,
    private adminService : AdminService,
    private router : Router,
    private productService : ProductServicesService

   ){
    this.formulario = new FormGroup({
      name : new FormControl(),
      description : new FormControl(),
      value : new FormControl(),
      marc : new FormControl(),
      type : new FormControl(),
      urlImg : new FormControl()
    })
   }

   ngOnInit(){
    this.getCategories();
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
  setDataProduct(){
    this.dataSearch.dataCardProduct = this.diversProduct;
    console.log("Se setea");
    console.log(this.diversProduct);
  }
   getCategorySelect($event : any){
    console.log($event.target.value);
    const selectedIndex = $event.target.selectedIndex;
    const selectedOption = $event.target.options[selectedIndex];
    const selectedText = selectedOption.textContent;
    console.log('Texto seleccionado:', selectedText);
    this.categorySelect = selectedText;
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
          // redirect : () => {this.redirectCategoryProducts(value.type)}
        }
        arrayData.push(data);

      });
      console.log(arrayData);
      this.dataCategory = arrayData;
      // this.setDataCategory(arrayData);
    });
  }

  uploadImage($event: any) {
    this.fileImg = $event.target.files[0];
    console.log(this.fileImg);
    console.log(this.formulario.get('category')?.value);
  }

  onSubmit(){

    console.log(this.formulario.value);
    console.log(this.formulario.valid);
    if (this.validate()) {
      this.setImg();
      console.log(this.urlImage);
      this.getUrlImg();
    }
  }

  validate(): boolean{
    let formValid = true;
    Object.keys(this.formulario.controls).forEach(key => {
      const control = this.formulario.controls[key];
      if (control.value === null || control.value.trim() === '') {
        formValid = false;
      }
    });
    if (formValid) {
      this.validateState = false;
      console.log('Todos los campos tienen datos. Puedes continuar con la lógica.');
    } else {
      console.log('Al menos uno de los campos está vacío.');
      this.dataAlert = {
        classAlert : "error",
        text : "Uno o varios campos estan vacios"
      }
    }
    return formValid;
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

  setProduct(url : any){
    const productRef = collection(this.firestore,this.categorySelect);
    this.formulario.value.urlImg = url;
    this.formulario.value.type = this.categorySelect;
    console.log(url);
    addDoc(productRef,this.formulario.value);
    this.dataAlert = {
      classAlert : "save",
      text : "Se ha creado correctamente"
    }
    return this.formulario.reset();
  }
  async setUrlImg(url : any){
    this.urlImage = await url;
    console.log(this.urlImage);
    this.setProduct(url);
  }

  async getUrlImg(){
    if (this.urlImage==undefined) {
       console.log( await this.urlImage);
    }
    console.log( this.urlImage);
    return this.urlImage;
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



}
