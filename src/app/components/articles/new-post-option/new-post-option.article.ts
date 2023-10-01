import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-option',
  templateUrl: './new-post-option.article.html',
  styleUrls: ['./new-post-option.article.scss']
})
export class NewPostOptionArticle {
  @Input() classNewPostOptions = "";
  constructor(
    private router : Router
  ){}
  redirectNewWime(){
    this.router.navigate(['/newWime']);
  }
  redirectNewPhoto(){
    this.router.navigate(['/newPost']);
  }
}
