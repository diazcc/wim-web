import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dm',
  templateUrl: './dm.page.html',
  styleUrls: ['./dm.page.scss']
})
export class DmPage {

  constructor(
    private router : Router
  ){}

  redirectPerfil(){
    this.router.navigate(['/profileUser']);
  }

  redirectChat(){
    console.log("hOLA");
    this.router.navigate(['/chat']);
  }

}
