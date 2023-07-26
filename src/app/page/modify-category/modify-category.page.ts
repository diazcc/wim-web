import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';
import { NavigationExtras, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { AdminService } from 'src/app/services/admin.service';
import { collection, getDocs } from 'firebase/firestore';
@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.page.html',
  styleUrls: ['./modify-category.page.scss']
})
export class ModifyCategoryPage {
  diversProduct : any = [];

  validateAlert : boolean = false;
  validateState : boolean = false;
  selectedOption : any = "";
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
  dataCategory =[
    {
      id : "",
      name : "",
      urlImg : "",
    }
  ];
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
    private storage : Storage,
    private router : Router,
    private productServices : ProductServicesService,
    private adminService : AdminService,
    private firestore : Firestore

   ){
    this.formulario = new FormGroup({
      name : new FormControl(),
      urlImg : new FormControl()
    })
   }

   ngOnInit(){
    this.getAllProducts();
    this.getDataCategories()
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

    this.validateUpdate()
  }

  validateUpdate(){
    console.log(this.selectedOption);
    if (this.selectedOption != "") {
      this.setImg();
    } else {
      this.validateAlert = true;
      this.dataAlert =  {
        classAlert : "error",
        text : "Selecciona una categoria"
      }
      setTimeout(() => {
        this.validateAlert = false;
      }, 3000);
    }
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
      this.validateAlert = true;
          this.dataAlert =  {
            classAlert : "error",
            text : "Selecciona una imagen para poder continuar"
          }
          setTimeout(() => {
            this.validateAlert = false;
          }, 3000);
    }
  }

  async setUrlImg(url : any){
    this.urlImage = await url;
    console.log(this.urlImage);
    this.validate();
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
  setSearch(){
    if (this.dataSearch.classSearch == "hidde") {
      this.setDataProduct();
    console.log(this.diversProduct);

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
  setDataProduct(){
    this.dataSearch.dataCardProduct = this.diversProduct;
    console.log("Se setea");
    console.log(this.diversProduct);
  }


  //-------get
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

  validate(){
    console.log(this.selectedOption);
    let modifyCategory : any;
    let id : any = "";
    if (this.selectedOption != "") {
      this.dataCategory.map((value:any)=>{
        if (value.name == this.formulario.value.name) {
          id = value.id;
          modifyCategory = {
            name : this.formulario.value.name,
            urlImg : this.urlImage
          }
        }
      });
    }else{
      console.log("Vacio");
    }
    console.log(modifyCategory.name);
    console.log(id);

    this.setCategory(id, modifyCategory);
  }


  async validateEmpty(){
    if (this.selectedOption != "") {
      const refData = collection(this.firestore,this.selectedOption);
      try {
        const refDoc = await getDocs(refData);
        if (refDoc.empty) {
          this.deleteCategory();

          console.log('La colección está vacía.');
        } else {
          this.validateAlert = true;
          this.dataAlert =  {
            classAlert : "error",
            text : "Contiene productos todavia"
          }
          setTimeout(() => {
            this.validateAlert = false;
          }, 3000);
          console.log('La colección tiene datos.');
        }
      } catch (error) {
        console.error('Error al obtener la colección:', error);
      }
    } else {
      this.validateAlert = true;
      this.dataAlert =  {
        classAlert : "error",
        text : "Selecciona una categoria"
      }
      setTimeout(() => {
        this.validateAlert = false;
      }, 3000);
    }
  }





  getDataCategories(){
    this.productServices.getCategories().subscribe((category:any)=>{
      const arrayData : any = [];
      category.map((value :any)=>{
        const data = {
          id : value.id,
          name : value.name
        }
        arrayData.push(data);
      });
      this.setDataCategorySelect(arrayData);
    });
  }

  setCategory(id : string, data : any){
    this.productServices.modifyCategory(id,data);
    this.validateAlert = true;
    this.dataAlert =  {
      classAlert : "save",
      text : "Se ha guardado correctamente los cambios"
    }
    setTimeout(() => {
      this.validateAlert = false;
      this.formulario.reset();
    }, 3000);
  }

  setDataCategorySelect(data : any ){
    this.dataCategory = data;
    console.log(this.dataCategory);
  }

  deleteCategory(){
    console.log(this.selectedOption);
    let modifyCategory : any;
    let id : any = "";
    if (this.selectedOption != "") {
      this.dataCategory.map((value:any)=>{
        if (value.name == this.formulario.value.name) {
          id = value.id;
          this.productServices.deleteCategory(id);
          console.log(value.name);
          this.validateAlert = true;
          this.dataAlert =  {
            classAlert : "save",
            text : "Categoria eliminada"
          }
          setTimeout(() => {
            this.validateAlert = false;
            this.formulario.reset();
          }, 3000);
        }
      });
    }else{
      console.log("Vacio");
    }
  }

}
