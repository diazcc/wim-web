import { Component, ElementRef, HostListener, Input,Renderer2 } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-product-template',
  templateUrl: './product.template.html',
  styleUrls: ['./product.template.scss']
})
export class ProductTemplate {
  classMain = "";
  previousScrollPosition = 0;
  @Input() dataSearch = {
    classSearch : "hidde",
    closeSearch : () =>{}
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
      textOption1 : "Adidas",
      textOption2 : "Nike",
      textOption3 : "Quest",
      textOption4 : "Puma",
      classMenu : "menu--hidden",
      classContentMenu : "content-menu",
      classOptionMmenu : "option-menu"
    }
  }

  @Input() dataPrincipalProduct = {
    data : [
      {
        urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
        textTitle : "sd",
        textDescription :"dasddasdasda",
        textValue : "4234234",
        clickProduct :()=>{}
      }
    ]
  }

  constructor(
    private productServices : ProductServicesService
  ){}

  ngOnInit(){
    this.getPrincipalProducts();
  }
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY;
      if (scrollPosition > this.previousScrollPosition) {
        this.dataHeader.classHeader = "hidde";
        this.dataHeader.dataNavBar.classMenu ="menu--hidden";
        this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
        this.classMain ="";
      } else {
        this.dataHeader.classHeader = "";
        this.dataHeader.dataNavBar.classMenu ="menu--hidden";
        this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
        this.classMain ="";
      }

      if (scrollPosition < 150) {
        this.dataHeader.classHeader = "";
      }

      this.previousScrollPosition = scrollPosition;
    }

    setSearch(){
      if (this.dataSearch.classSearch == "hidde") {
        this.dataSearch = {
          classSearch : "search",
          closeSearch : () =>{this.closeSearch()}
        }
        this.dataHeader.classHeader = "hidde";
      }else{
        this.dataSearch = {
          classSearch : "hidde",
          closeSearch : () =>{this.closeSearch()}
        }
        this.dataHeader.classHeader = "header";
      }
    }
    closeSearch(){
      if (this.dataSearch.classSearch == "search") {
        this.dataSearch.classSearch = "hidde";
        this.dataHeader.classHeader = "header";
      }else{
        this.dataSearch.classSearch = "search";
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

  getPrincipalProducts(){
    this.productServices.getCaps().pipe(map((response)=>{
      let arrayData : any = [];
      console.log(response);
      response.map((value : any) => {
        console.log(value.urlImg);
        const data =  {
          urlImgPrincipalProduct : value.urlImg,
          textTitle : value.name,
          textDescription :value.description,
          textValue : value.value
        }
        arrayData.push(data);
        console.log(arrayData);
      });
      const responseData = arrayData;
      return response = responseData;
    })).subscribe((response)=>{
      console.log(response);
      this.setDataPrincipalProduct(response);
    });
  }
  setDataPrincipalProduct(responseData : any){
    this.dataPrincipalProduct.data = responseData;
    console.log(this.dataPrincipalProduct.data = responseData);
  }
}
