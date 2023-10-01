import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.article.html',
  styleUrls: ['./share.article.scss']
})
export class ShareArticle {
  @Input() classShare = "hidde";

}
