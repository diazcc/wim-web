import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-wime',
  templateUrl: './description-wime.content-wime.html',
  styleUrls: ['./description-wime.content-wime.scss']
})
export class DescriptionWimeContentWime {
  classDmWime = "wime";
  @Input() dataDescription ={
    openComment: () =>{},
    openShare: ()=>{}
  }
}
