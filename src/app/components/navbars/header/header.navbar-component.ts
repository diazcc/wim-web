import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.navbar-component.html',
  styleUrls: ['./header.navbar-component.scss']
})
export class HeaderNavbarComponent {
  @Input() dataMenu = {
    setMenu : ()=>{}
  }
  constructor(
    private router : Router
  ){}

  redirectPerfil(){
    this.router.navigate(['/profileUser']);
  }
  redirectViewFollows(){
    this.router.navigate(['/follows']);
  }
}
