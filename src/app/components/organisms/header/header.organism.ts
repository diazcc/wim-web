import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.organism.html',
  styleUrls: ['./header.organism.scss']
})
export class HeaderOrganism {
  dataNavBar = {
    textOption1 : "fd",
    textOption2 : "fdf",
    textOption3 : "fdf",
    textOption4 : "fdf",
    classMenu : "menu",
    classContentMenu : "content-menu",
    classOptionMmenu : "option-menu"
  }
}
