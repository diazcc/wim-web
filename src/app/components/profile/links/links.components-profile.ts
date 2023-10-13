import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.components-profile.html',
  styleUrls: ['./links.components-profile.scss']
})
export class LinksComponentsProfile {
  @Input() dataLinks = [
    {
      nameLink : "",
      urlLink : "",
      urlImg : ""
    }
  ]
}
