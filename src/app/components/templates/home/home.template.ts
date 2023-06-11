import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-template',
  templateUrl: './home.template.html',
  styleUrls: ['./home.template.scss']
})
export class HomeTemplate {
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
