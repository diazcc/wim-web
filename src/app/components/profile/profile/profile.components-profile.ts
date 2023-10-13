import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiled',
  templateUrl: './profile.components-profile.html',
  styleUrls: ['./profile.components-profile.scss']
})
export class ProfileComponentsProfile {
  stateContentInformation : boolean = false;
  stateContentLinks : boolean = false;
  @Output() arrayDataChange = new EventEmitter<boolean[]>();
// FALTA LOS DATOS DE LINKS
  @Input() dataProfile = {
    userName : "",
    urlImg : "",
    clickFolloEdit : ()=>{},
    textFolloEdit : "",
    classFolloEdit : "",
    textPresentation : "",
    dataContentInformation : {
      age : "--",
      locate : "--",
      hobbies : "--",
      skills : "--"
    },
    dataLinks : [
      {
        nameLink : "",
        urlLink : "",
        urlImg : ""
      }
    ]
  }
  constructor(
    private router : Router
  ){}
  redirectDm(){
    this.router.navigate(['/dm']);
  }
  redirectContentUser(){
    this.router.navigate(['/contentUser']);
  }

  setContentInformation(){
    if (this.stateContentInformation) {
      this.stateContentLinks= false;
      this.stateContentInformation = false;
    }else{
      this.stateContentLinks= false;
      this.stateContentInformation = true;

    }
  }
  setContentLinks(){
    if (this.stateContentLinks) {
      this.stateContentLinks= false;
      this.stateContentInformation = false;
    }else{
      this.stateContentLinks= true;
      this.stateContentInformation = false;
    }
  }

  async handleArrayDataChange(eventData : any) {
    if (eventData[1] ===true) {
      this.stateContentInformation = false;
    }else if(eventData[0]===undefined){
    }
  }
}
