import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-new-user-description',
  templateUrl: './new-user-description.page.html',
  styleUrls: ['./new-user-description.page.scss']
})
export class NewUserDescriptionPage {
  constructor(
    private renderer : Renderer2
  ){}

  ngOnInit(){
    this.renderer.addClass(document.body, 'bodyWhite')
  }

  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'bodyWhite')
  }
}
