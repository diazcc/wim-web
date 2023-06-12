import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.organism.html',
  styleUrls: ['./header.organism.scss']
})
export class HeaderOrganism {
  dataNavBar = {
    textOption1 : "Adidas",
    textOption2 : "Nike",
    textOption3 : "Quest",
    textOption4 : "Puma",
    classMenu : "menu",
    classContentMenu : "content-menu",
    classOptionMmenu : "option-menu"
  }
}
