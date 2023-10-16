import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('followButton') followButton!: ElementRef;
// FALTA LOS DATOS DE LINKS
  classUserName = "small";
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

  ngAfterViewInit() {
    // Crea un observador de cambios de tamaño
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        // El ancho del elemento ha cambiado
        const nuevoAncho = entry.contentRect.width;
        console.log("Ancho del name cambió a: " + nuevoAncho + " píxeles");
        if (nuevoAncho>=136) {
        console.log(nuevoAncho);

          this.classUserName = "small";
        } else {
          this.classUserName = "";
        console.log(nuevoAncho);

        }
      }
    });
    resizeObserver.observe(this.followButton.nativeElement);
  }

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
