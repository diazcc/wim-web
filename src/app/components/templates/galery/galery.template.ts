import { Component, ElementRef, HostListener, Input,Renderer2, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.template.html',
  styleUrls: ['./galery.template.scss']
})
export class GaleryTemplate {
  previousScrollPosition = 0;
  @Input() selectedOption : any ="Todo";


  @Input() dataOption = {
    setFilter : () =>{},
    data : [
      {
        marc :"Marcas"
      }
    ]
  };
  @Input() classMain = "";
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

    onOptionSelected() {

    }


}
