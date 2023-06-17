import { Component } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})
export class IndexPage {
  ngOnInit(){
    setTimeout(() => {
      window.location.href = "home";
    }, 2000);
  }

}
