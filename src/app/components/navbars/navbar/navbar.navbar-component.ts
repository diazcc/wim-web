import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.navbar-component.html',
  styleUrls: ['./navbar.navbar-component.scss']
})
export class NavbarNavbarComponent {
  @Input() dataNavBar = {
    imgHome: "home",
    imgSearch: "search",
    imgMore: "more",
    imgNoti: "message-white",
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
