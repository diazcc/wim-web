import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-new-wime',
  templateUrl: './new-wime.page.html',
  styleUrls: ['./new-wime.page.scss']
})
export class NewWimePage {
  constructor(
    private renderer: Renderer2
  ){}
  ngOnInit(){
    console.log("ad");
    this.renderer.addClass(document.body, 'bodyBlack');
  }
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

  updateCharCount(event:any){
    console.log(event);
  }
  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'bodyBlack');
   }
}
