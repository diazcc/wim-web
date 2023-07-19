import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.organism.html',
  styleUrls: ['./menu-adm.organism.scss']
})
export class MenuAdmOrganism {
  stateMenu : boolean = true;
  @Input() dataMenu  = {
    classMenu : "menu",
    closeMenu : ()=>{},
    closeSesion :()=>{}
  }

  constructor(
    private router : Router
  ){}

  redirectHome(){
    this.router.navigate(['/home']);
  }

  redirectContentHome(){
    this.router.navigate(['/admHome']);
  }
  redirectNewCategory(){
    this.router.navigate(['/newCategory']);
  }
  redirectModifyCategory(){
    this.router.navigate(['/modifyCategory']);
  }

  redirectFeaturedProducts(){
    this.router.navigate(['/featuredProducts']);
  }

}
