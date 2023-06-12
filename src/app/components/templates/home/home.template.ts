import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-template',
  templateUrl: './home.template.html',
  styleUrls: ['./home.template.scss']
})
export class HomeTemplate {

  dataNavBar = {
    textOption1 : "fd",
    textOption2 : "fdf",
    textOption3 : "fdf",
    textOption4 : "fdf",
    classMenu : "menu",
    classContentMenu : "content-menu",
    classOptionMmenu : "option-menu"
  }

  classMenu = "menu--hidden";
  classMain = "main";
  showMenu(){
    if (this.classMenu=="menu--hidden") {
      this.classMenu="menu";
      this.classMain = "main filterBlur";
    }else{
      this.classMenu="menu--hidden";
      this.classMain = "main";
    }
    console.log("Menu activo");
  }
}
