import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wime',
  templateUrl: './wime.wime-component.html',
  styleUrls: ['./wime.wime-component.scss']
})
export class WimeWimeComponent {
  @Input() classAllComments = "";

  @Input() dataDescription ={
    openComment: () =>{},
    openShare: ()=>{}
  }
  @Input() dataAllComments ={
    closeComments : () =>{
    }
  }
  @Input() dataOpenSettings ={
    open :()=>{
    }
  }

  @Input()clickView(){
    console.log("click wime");
  }
}
