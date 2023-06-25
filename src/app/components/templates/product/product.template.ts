import { Component, ElementRef, HostListener, Input,Renderer2, ChangeDetectorRef  } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { map } from 'rxjs';
import { collection, onSnapshot, DocumentSnapshot, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-product-template',
  templateUrl: './product.template.html',
  styleUrls: ['./product.template.scss']
})
export class ProductTemplate {
  previousScrollPosition = 0;
  @Input() classMain = "";
  @Input() dataSearch = {
    classSearch : "",
    closeSearch : () =>{}
   }
  @Input() dataHeader = {
    textTitle :"",
    urlIconMenu: "",
    classHeader :"",
    classContentHeader :"",
    classIconMenu :"",
    classIconMenu2 :"",
    classHeaderTitulo :"",
    clickHeader : () => {},
    clickSearch : () => {},
    dataNavBar : {
      textOption1 : "",
      textOption2 : "",
      textOption3 : "",
      textOption4 : "",
      classMenu : "",
      classContentMenu : "",
      classOptionMmenu : ""
    }
  }
  @Input() dataViewProduct = {
    name :"",
    urlImg : "",
    value : "",
    description : ""
  }



  @Input() dataCardProduct = {
    data : [
      {
        urlImgPrincipalProduct : "",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      }
    ]
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





}
