import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';
@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.page.html',
  styleUrls: ['./modify-category.page.scss']
})
export class ModifyCategoryPage {
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
  private newName : string ="";
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
    classAlert : "save",
    text : "sssssssss"
  }

   constructor(
    private renderer : Renderer2,
    private storage : Storage,
    private router : Router,
    private productServices : ProductServicesService

   ){
    this.formulario = new FormGroup({
      name : new FormControl(),
      newName : new FormControl(),
      urlImg : new FormControl()
    })
   }

   ngOnInit(){
    this.getDataCategories()
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

  async setUrlImg(url : any){
    this.urlImage = await url;
    console.log(this.urlImage);
    this.validate();
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
  redirectNewProduct(){
    this.router.navigate(['/newProduct']);
  }


  //_-------get

  validate(){
    console.log(this.selectedOption);
    let modifyCategory : any;
    let id : any = "";
    if (this.selectedOption != "") {
      this.dataCategory.map((value:any)=>{
        if (value.name == this.formulario.value.name) {
          id = value.id;
          modifyCategory = {
            name : this.formulario.value.newName,
            urlImg : this.urlImage
          }
        }
      });
    }else{
      console.log("Vacio");
    }
    console.log(modifyCategory);
    this.setCategory(id, modifyCategory);
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
  }

  setDataCategorySelect(data : any ){
    this.dataCategory = data;
    console.log(this.dataCategory);
  }

}
