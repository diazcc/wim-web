import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.organism.html',
  styleUrls: ['./slider.organism.scss']
})
export class SliderOrganism {

  stateArrowLeft : boolean = true;
  stateArrowRight : boolean = true;

  @Input() dataSlider = [
    {
      urlImg: "/assets/img/logodragonsolo.svg",
      name : "Nombre",
      value : "48484"
    }
  ]

  arrowLeft : any;
  arrowRight : any;
  currentPosition =0;
  startHeight = 31.25;
  finalHeight = 0;
  margin = -100;


  onDragOrScroll(event: Event) {
    const carruselElement = event.target as HTMLElement;
    const scrollLeft = carruselElement.scrollLeft;

    console.log(scrollLeft);
  }

  clickLeft(){
    if (this.margin != 0) {

      this.stateArrowRight  = true;
      console.log("Left");
      this.margin = this.margin + 100;
      console.log(this.margin);
    }else{
     this.stateArrowLeft  = false;
     console.log(this.stateArrowLeft);
     console.log(this.margin);
    }
  }

  clickRight(){

    if (this.margin >= -100) {
      this.stateArrowLeft  = true;
      console.log("Right");
      this.margin = this.margin - 100;
      console.log(this.margin);
    }else{
      this.stateArrowRight  = false;
      console.log(this.stateArrowRight);
      console.log(this.margin);
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
}
