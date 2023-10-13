import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-wime',
  templateUrl: './description.wime-component.html',
  styleUrls: ['./description.wime-component.scss']
})
export class DescriptionWimeComponent {
  classDmWime = "wime";
  @Input() dataDescription ={
    openComment: () =>{},
    openShare: ()=>{}
  }
}
