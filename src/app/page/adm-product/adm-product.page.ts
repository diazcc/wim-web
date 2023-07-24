import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { collection, onSnapshot, query, where , DocumentSnapshot, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adm-product',
  templateUrl: './adm-product.page.html',
  styleUrls: ['./adm-product.page.scss']
})
export class AdmProductPage {
  dataAlert = {
    classAlert : "hidden",
    text : ""
  }
  diversProduct : any = [] ;
  textAlert : string = "";
  textStateView : string = "";
  validateStateView : boolean = false;
  validateState : boolean = false;
  stateView : boolean = false;
  @Input() idProductStateNav : any;
  @Input() idProducNavigate : any;

  @Input() idTypeStateNav : any;
  @Input() idTypeNavigate : any;

  product : any = {};

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
    private router : Router,
    private productService : ProductServicesService,
    private adminService : AdminService
   ){
    this.formulario = new FormGroup({
      name : new FormControl(),
      description : new FormControl(),
      value : new FormControl(),
      marc : new FormControl(),
      type : new FormControl(),
      urlImg : new FormControl()
    })
    const navigation = this.router.getCurrentNavigation();
    this.idProductStateNav = navigation?.extras.state as any;
    this.idProducNavigate = this.idProductStateNav?.idProduct;
    this.idTypeNavigate = this.idProductStateNav?.category;
    console.log(this.idProducNavigate);
    console.log(this.idTypeNavigate);
    this.renderer.removeClass(document.body, 'bodyBlock');

  }

  ngOnInit(){
    this.getProduct();
     if (this.validateEntry()) {
       this.getCategories();
       this.validateStateView = false;
      } else {
        this.validateStateView = true;
        this.textStateView= "Escoge un producto en el buscador para poder acceder.";
      }
  }


  validateEntry() : boolean{
      if (this.idProducNavigate != undefined) {
        return true;
      } else {
        return false;
      }
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
  getProduct(){
    this.productService.getProduct(this.idProducNavigate,this.idTypeNavigate).subscribe((product:any)=>{
      console.log(product);
      const data : any = {
        id : product.id,
        name : product.name,
        type : product.type,
        value :product.value,
        urlImg : product.urlImg,
        description : product.description,
        marc :product.marc
      }
      this.setProduct(data);
    });
  }

  setProduct(data :any){
    this.product = data;
    this.setPredeterminadeForm();
    console.log(this.product);
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
      }
      arrayData.push(data);

    });
    console.log(arrayData);
    this.dataCategory = arrayData;
  });
  }

  uploadImage($event: any) {
    this.fileImg = $event.target.files[0];
    console.log(this.fileImg);
    console.log(this.formulario.get('category')?.value);
  }

  onSubmit(){
    this.setImg();
    console.log(this.formulario.value);
    console.log(this.formulario.valid);
    console.log(this.formulario.value.urlImg);
  }
  deleteProduct(){
    const refProduct =doc(this.firestore,this.product.type, this.product.id);
    deleteDoc(refProduct);
    console.log("Hola");
    this.validateStateView = true;
    this.textStateView = "Producto eliminado! Cambia de vista"
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
      console.log(this.product.urlImg);
      this.setUrlImg(this.product.urlImg);
    }
  }

  setPredeterminadeForm(){
    console.log(this.product.urlImg);

    this.formulario.patchValue({
      name: this.product.name,
      description: this.product.description,
      value: this.product.value,
      marc: this.product.marc
    });
    console.log(this.formulario.value);
  }

  async setDataProduct(url : any){
    const categoryDoc = doc(this.firestore,this.product.type,this.product.id);
    this.formulario.value.urlImg = url;
    this.formulario.value.type = this.product.type;
    console.log(this.formulario.value);
    try {
      await updateDoc(categoryDoc, this.formulario.value);
      this.textAlert = "Se ha guardado correctamente los cambios";
      console.log('Documento actualizado exitosamente!');
      this.dataAlert = {
        classAlert : "save",
        text : "Se ha guardado correctamente"
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
      this.dataAlert = {
        classAlert : "error",
        text : "Ha sucedido un error inesperado"
      }
    }
  }

  async setUrlImg(url : any){
    this.urlImage = await url;
    console.log(this.urlImage);
    this.setDataProduct(url);
  }



  async getUrlImg(){
    if (this.urlImage==undefined) {
       console.log( await this.urlImage);
    }
    console.log( this.urlImage);
    return this.urlImage;
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
  setDataProductSearch(){
    this.dataSearch.dataCardProduct = this.diversProduct;
    console.log("Se setea");
    console.log(this.diversProduct);
  }

  redirectUpdateProduct(id : any, type : any){
    this.idProducNavigate = id;
    this.idTypeNavigate = type;
    this.getProduct();
    this.closeSearch();
  }

   setSearch(){
    if (this.dataSearch.classSearch == "hidde") {
      this.getAllProducts();
      this.dataSearch.classSearch = "search";
      this.dataSearch.closeSearch = () =>{this.closeSearch()}
      this.dataHeader.classHeader = "hidde";
      this.renderer.addClass(document.body, 'bodyBlock');
      this.setDataProductSearch();
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
      console.log("cierra");
      this.diversProduct.splice(0,this.diversProduct.length);
    }else{
      this.dataSearch.classSearch = "search";
      this.renderer.addClass(document.body, 'bodyBlock');

    }
  }
  redirectNewProduct(){
    this.router.navigate(['/newProduct']);
  }

}
