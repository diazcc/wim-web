import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.article.html',
  styleUrls: ['./menu.article.scss']
})
export class MenuArticle {
  @Input() classMenu = "";
}
