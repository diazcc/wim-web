import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.article.html',
  styleUrls: ['./profile.article.scss']
})
export class ProfileArticle {
  stateContentInformation : boolean = false;
  stateContentLinks : boolean = false;
  @Output() arrayDataChange = new EventEmitter<boolean[]>();

  dataProfile = {
    userName : "User Name",
    clickFolloEdit : ()=>{
      console.log("folo");
    },
    textFolloEdit : "Editar",
    classFolloEdit : "edit",
    textPresentation : "Soy  Díaz, creador de esta app. Aquí podrás concerme a mi y mis servicios como desarrollador",
    dataContentInformation : {
      age : "--",
      locate : "--",
      hobbies : "--",
      skills : "--"
    }
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
