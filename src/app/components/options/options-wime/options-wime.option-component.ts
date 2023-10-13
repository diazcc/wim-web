import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-wime',
  templateUrl: './options-wime.option-component.html',
  styleUrls: ['./options-wime.option-component.scss']
})
export class OptionsWimeOptionComponent {
  @Input() dataSettingWime = {
    classSetting :"",
    close :  () =>{ console.log("GHola")},
    reportContent : () =>{console.log("GHola")},
    reportCount : () =>{console.log("GHola")}
  }
}
