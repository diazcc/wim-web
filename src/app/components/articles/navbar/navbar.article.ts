import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.article.html',
  styleUrls: ['./navbar.article.scss']
})
export class NavbarArticle {
  @Input() dataNavBar = {
    imgHome: "home",
    imgSearch: "search",
    imgMore: "more",
    imgMedia: "media",
    imgUser: "/assets/img/foto.png",
    classNavbar :"",
    setNewPost : ()=>{}
  }
  constructor(
    private router : Router
  ){}
  redirectPerfil(){
    this.router.navigate(['/profileUser']);
  }
  redirectSearch(){
    this.router.navigate(['/search']);
  }
  redirectHome(){
    this.router.navigate(['/home']);
  }
}
