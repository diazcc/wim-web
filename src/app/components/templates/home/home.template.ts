import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-home-template',
  templateUrl: './home.template.html',
  styleUrls: ['./home.template.scss']
})
export class HomeTemplate {
  classMain = "main";
  previousScrollPosition = 0;



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

  @Input() dataPrincipalProduct = {
    data : [
      {
        urlImgPrincipalProduct : "",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct :()=>{}
      }
    ]
  }

  @Input() dataArticlePresentation = {
    icon1 : "",
    icon2 : "",
    icon3 : "",
    icon4 : "",
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
  constructor(private elementRef: ElementRef) {}


  onScroll(){
    const mainElement = this.elementRef.nativeElement.querySelector('main');
    const scrollPosition = mainElement.scrollTop;
    if (scrollPosition > this.previousScrollPosition) {
      this.dataHeader.classHeader = "hidde";
    } else{
      this.dataHeader.classHeader = "";
    }
    if (scrollPosition<350) {
      this.dataHeader.classHeader = "";
    }
    this.previousScrollPosition = scrollPosition;
  }

}
