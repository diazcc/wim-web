import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.organism.html',
  styleUrls: ['./header.organism.scss']
})
export class HeaderOrganism {

  @Input() urlIcon ="assets/img/logoconletra.svg";
  @Input() classIconContent ="logoTitle";
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



}
