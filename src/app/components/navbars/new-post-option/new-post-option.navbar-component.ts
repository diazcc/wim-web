import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-option',
  templateUrl: './new-post-option.navbar-component.html',
  styleUrls: ['./new-post-option.navbar-component.scss']
})
export class NewPostOptionNavbarComponent {
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
