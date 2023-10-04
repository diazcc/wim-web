import { Component,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.page.html',
  styleUrls: ['./new-photo.page.scss']
})
export class NewPhotoPage {
  dataNavBar = {
    imgHome: "home",
    imgSearch: "search",
    imgMore: "more",
    imgNoti: "message-white",
    imgUser: "/assets/img/foto.png",
    classNavbar :"viewWime",
    setNewPost : ()=>{},
    redirectHome : ()=>{this.router.navigate(['/home']);},
    redirectSearch:()=>{},
    redirectUndefined : ()=>{}
  }
  constructor(
    private renderer : Renderer2,
    private router : Router
  ){}

  ngOnInit(){
    this.renderer.addClass(document.body, 'bodyBlack');
  }
  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'bodyBlack');

  }
}
