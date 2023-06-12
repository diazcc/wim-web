import { Component,Input } from '@angular/core';

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
    textOption4 : "",
    classMenu : "",
    classContentMenu : "",
    classOptionMmenu : ""
  }
}



