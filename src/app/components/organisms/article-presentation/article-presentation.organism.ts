import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-article-presentation',
  templateUrl: './article-presentation.organism.html',
  styleUrls: ['./article-presentation.organism.scss']
})
export class ArticlePresentationOrganism {
 @Input() dataArticlePresentation = {
  icon1 : "",
  icon2 : "",
  icon3 : "",
  icon4 : "",
 }

}
