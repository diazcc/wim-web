import { Component, EventEmitter, Input, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { collection, onSnapshot, query, where , DocumentSnapshot, addDoc, updateDoc, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';
import { NavigationExtras, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { SearchOrganism } from 'src/app/components/organisms/search/search.organism';

@Component({
  selector: 'app-adm-home',
  templateUrl: './adm-home.page.html',
  styleUrls: ['./adm-home.page.scss']
})
export class AdmHomePage {
  @ViewChild(SearchOrganism) search!: SearchOrganism;
  diversProduct : any = [];
  textSearch : any = "";
  dataMenu  = {
    classMenu : "close",
    closeMenu : ()=>{ this.closeMenu()},
    closeSesion :()=>{}
  }
  formulario: FormGroup;
  alertForm = "";
  classForm = "";
  private titlePresentation : string ="";
  private descriptionPresentation : string ="";
  private linkWhatsapp : string ="";
  private urlImg : string ="";
  private linkFacebook : string ="";
  private linkInstagram : string ="";
  private fileTC : string ="";
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
   dataHome = {
    descriptionPresentation :"",
    titlePresentation : "",
    linkWhatsapp :" ",
    linkInstagram :"",
    linkFacebook : "",
    fileTC : "",
    urlImg : ""
  }
  dataAlert = {
    classAlert : "hidden",
    text : ""
  }
   constructor(
    private renderer : Renderer2,
    private router : Router,
    private firestore: Firestore,
    private storage : Storage,
    private productService : ProductServicesService
   ){
    this.formulario = new FormGroup({
      descriptionPresentation : new FormControl(),
      titlePresentation : new FormControl(),
      linkWhatsapp : new FormControl(),
      linkInstagram : new FormControl(),
      linkFacebook : new FormControl(),
      fileTC : new FormControl(),
      urlImg : new FormControl()
    })

  }

  ngOnInit(){
    this.getAllProducts();

  }

  onSubmit(){
    console.log("Se guardo")
    console.log(this.formulario.value)
    this.updateData();
    this.formulario.reset();
    this.dataAlert =  {
      classAlert : "save",
      text : "Se ha guardado correctamente los cambios"
    }
  }

  async updateData(){
    const collectionRef : any = collection(this.firestore,"home");
    const docRef = doc(collectionRef,'dataHome');
    const data = {
      descriptionPresentation : this.formulario.get('descriptionPresentation')?.value,
      titlePresentation : this.formulario.get('titlePresentation')?.value,
      linkWhatsapp : "https://wa.me/+57"+this.formulario.get('linkWhatsapp')?.value+"?text=Hola,%20estoy%20interesado%20en%20uno%20de%20sus%20productos",
      linkInstagram : this.formulario.get('linkInstagram')?.value,
      linkFacebook : this.formulario.get('linkFacebook')?.value,
      fileTC : this.formulario.get('fileTC')?.value,
      urlImg : this.formulario.get('urlImg')?.value
    }

    try {
      await updateDoc(docRef, data);
      console.log('Documento actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
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

   setSearch(){
    if (this.dataSearch.classSearch == "hidde") {
      this.setDataProduct();
      this.dataSearch.classSearch = "search";
      this.dataSearch.closeSearch = () =>{this.closeSearch()}
      this.dataHeader.classHeader = "hidde";
      this.renderer.addClass(document.body, 'bodyBlock');
    }else{
      this.dataSearch.dataCardProduct.splice(0,this.dataSearch.dataCardProduct.length);
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
      console.log("Se cierra");
      this.search.clearInput();
    }else{
      this.dataSearch.classSearch = "search";
      this.renderer.addClass(document.body, 'bodyBlock');
    }
  }
  redirectNewProduct(){
    this.router.navigate(['/newProduct']);
  }

  //FUNCIONES GET Y SET

  setDataHome(){
    const productRef = collection(this.firestore,'home');
    this.dataHome = {
      descriptionPresentation :"",
      titlePresentation : "",
      linkWhatsapp :" ",
      linkInstagram :"",
      linkFacebook : "",
      fileTC : "",
      urlImg : ""
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

  detectChange($event : any){
    console.log($event);
    this.textSearch = $event;
    this.searchProduct();
  }

  searchProduct(){
    if (!this.textSearch) {
      // this.zapatillas = this.zapatillasService.getZapatillas();
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

}
