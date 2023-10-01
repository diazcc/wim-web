import { Component,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  dataNavBar = {
    imgHome: "home",
    imgSearch: "search",
    imgMore: "more",
    imgMedia: "media",
    imgUser: "/assets/img/foto.png",
    classNavbar :"viewWime",
    setNewPost : ()=>{},
    redirectHome : ()=>{},
    redirectSearch:()=>{},
    redirectUndefined : ()=>{}
  }
  constructor(
    private renderer : Renderer2
  ){}
  ngOnInit(){
    this.renderer.addClass(document.body, 'bodyBlack');
  }

  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'bodyBlack');

  }
}
