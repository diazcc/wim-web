import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.article.html',
  styleUrls: ['./header.article.scss']
})
export class HeaderArticle {
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
