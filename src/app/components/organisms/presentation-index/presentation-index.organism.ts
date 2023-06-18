import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-presentation-index',
  templateUrl: './presentation-index.organism.html',
  styleUrls: ['./presentation-index.organism.scss']
})
export class PresentationIndexOrganism {
  @Input() classPresentation = "";
}
