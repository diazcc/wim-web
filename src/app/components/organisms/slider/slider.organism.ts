import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.organism.html',
  styleUrls: ['./slider.organism.scss']
})
export class SliderOrganism {

  stateArrowLeft : boolean = true;
  stateArrowRight : boolean = true;

  @Input() dataSlider = {
    classSlider : "",
    classDescription : "",
    data :[
      {
        urlImg: "/assets/img/logodragonsolo.svg",
        name : "Nombre",
        value : "48484",
        redirectProduct : () =>{}
      }
    ]
  }

  arrowLeft : any;
  arrowRight : any;
  currentPosition =0;
  startHeight = 31.25;
  finalHeight = 0;
  margin = -100;


  onDragOrScroll(event: Event) {
    const carruselElement = event.target as HTMLElement;
    const scrollLeft = carruselElement.scrollLeft;

  }

  clickLeft(){
    if (this.margin != 0) {

      this.stateArrowRight  = true;
      this.margin = this.margin + 100;
    }else{
     this.stateArrowLeft  = false;
    }
  }

  clickRight(){

    if (this.margin >= -100) {
      this.stateArrowLeft  = true;
      this.margin = this.margin - 100;
    }else{
      this.stateArrowRight  = false;
     }
  }

  isFirstImage(index: number): boolean {
    return index === 0;
  }

  getStateRight() : boolean{
    if (this.margin == -200) {
      this.stateArrowRight = false;
    }
    return this.stateArrowRight;
  }


  getStateLeft() : boolean{
    if (this.margin >= 0) {
      this.stateArrowLeft = false;
    }
    return this.stateArrowLeft;
  }

  redirectProduct(){
    console.log("Añañai");
  }
}
