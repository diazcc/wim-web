import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.atom.html',
  styleUrls: ['./icon.atom.scss']
})
export class IconAtom {
  @Input() urlIcon = "";
  @Input() classIconContent = "";
}
