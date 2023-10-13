import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-profile',
  templateUrl: './description.components-profile.html',
  styleUrls: ['./description.components-profile.scss']
})
export class DescriptionComponentsProfile {
  @Input() dataContentInformation = {
    age : "--",
    locate : "--",
    hobbies : "--",
    skills : "--"
  }
}
