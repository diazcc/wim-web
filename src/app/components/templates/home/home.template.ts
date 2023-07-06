import { Component, ElementRef, HostListener, Input,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-template',
  templateUrl: './home.template.html',
  styleUrls: ['./home.template.scss']
})
export class HomeTemplate {
  @Input() dataSlider = [
    {
      urlImg: "/assets/img/cap.png",
      name : "Jamaicana",
      value : "3500"
    }
  ]
  @Input() dataCategory ={
    titleCategory : "Categorias",
    data : [
      {
        name : "",
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
      classMenu : "",
      classContentMenu : "",
      classOptionMmenu : "",
      redirectContact : () =>{},
      redirectMarcs : () =>{}
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
