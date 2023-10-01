import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-presentation',
  templateUrl: './index-presentation.page.html',
  styleUrls: ['./index-presentation.page.scss']
})

export class IndexPresentationPage {
  classContent = "";
  classImg = "hidde";
  classDescription = "hidde";
  classFormLogin = "hidde";

  constructor(
    private router : Router,
    private renderer : Renderer2
  ){}

  ngOnInit(){
    setTimeout(() => {
      this.classImg = "show";
    }, 1700);
    setTimeout(() => {
      this.classDescription = "show";
    }, 2000);
    setTimeout(() => {
      this.classDescription = "hidde";
      this.classFormLogin = "show";

    }, 4000);
  }
  redirectHome(){
    this.router.navigate(['/home']);
  }
  redirectCrearCount(){
    this.router.navigate(['/register'])
  }
}
