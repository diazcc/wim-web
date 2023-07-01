import { Component, ElementRef, HostListener, Input,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-template',
  templateUrl: './home.template.html',
  styleUrls: ['./home.template.scss']
})
export class HomeTemplate {
  @Input() dataCategory ={
    titleCategory : "Marcas",
    data : [
      {
        nameMarc : "",
        urlImg : "",
        redirect : () => {}
      }
    ]
  }

  @Input() dataMain = {
    classMain : "",
    clickMore : () =>{}
  }
  previousScrollPosition = 0;

  @Input() dataSearch = {
    classSearch : "hidde",
    closeSearch : () =>{}
   }


  @Input() dataPresentation = {
    classPresentation : ""
  }

  @Input() dataSectionPhotos = {
    textTitle : "",
    urlImg1 : "",
    urlImg2 : "",
    urlImg3 : "",
    urlImg4 : "",
  }

  // @Input() dataCardProduct = {
  //   data : [
  //     {
  //       urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
  //       textTitle : "",
  //       textDescription :"",
  //       textValue : "",
  //       clickProduct : () =>{}
  //     }
  //   ]
  // }

  @Input() dataArticlePresentation = {
    title: "",
    description : "",
    redirect : () =>{}
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
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) {}

    ngOnInit(){
    }


    ngAfterViewInit(){
      window.scrollTo(0, 0);
    }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY;

      if (scrollPosition > this.previousScrollPosition) {
        this.dataHeader.classHeader = "hidde";
        this.dataHeader.dataNavBar.classMenu ="menu--hidden";
        this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
        this.dataMain.classMain ="";
      } else {
        this.dataHeader.classHeader = "";
        this.dataHeader.dataNavBar.classMenu ="menu--hidden";
        this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
        this.dataMain.classMain ="";
      }

      if (scrollPosition < 150) {
        this.dataHeader.classHeader = "";
      }

      this.previousScrollPosition = scrollPosition;
    }

}
