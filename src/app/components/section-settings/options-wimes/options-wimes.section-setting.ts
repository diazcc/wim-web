import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-wimes',
  templateUrl: './options-wimes.section-setting.html',
  styleUrls: ['./options-wimes.section-setting.scss']
})
export class OptionsWimesSectionSetting {
  @Input() dataSettingWime = {
    classSetting :"",
    close :  () =>{ console.log("GHola")},
    reportContent : () =>{console.log("GHola")},
    reportCount : () =>{console.log("GHola")}
  }
}
