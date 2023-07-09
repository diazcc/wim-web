import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.molecule.html',
  styleUrls: ['./navbar.molecule.scss']
})
export class NavbarMolecule {
  @Input() dataNavBar = {
    textOption1 : "",
    textOption2 : "",
    textOption3 : "",
    classMenu : "",
    classContentMenu : "s",
    classOptionMmenu : "",
    redirectContact : () =>{},
    redirectMarcs : () =>{}
  }

  constructor(
    private router : Router
  ){}

  redirectHome(){
    this.router.navigate(['/home']);
  }

  redirectGalery(){
    this.router.navigate(['/galery']);
  }

  redirectMarcs(){
    this.dataNavBar.classMenu = "menu--hidden"
    const titleMarc = document.getElementById('titleCategory');
    if (titleMarc) {
    console.log("se encontro el id")

      titleMarc.scrollIntoView({ behavior: 'smooth' });
    }else{
      this.router.navigate(['/home']);

    }
  }

  redirectContact(){

  }
}



