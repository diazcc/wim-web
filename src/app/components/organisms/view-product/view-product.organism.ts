import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.organism.html',
  styleUrls: ['./view-product.organism.scss']
})
export class ViewProductOrganism {

  @Input() dataViewProduct = {
    name :"",
    urlImg : "",
    value : "",
    description : "",
    redirectWpp : () =>{}
  }
  // @Input() dataSlider = {
  //   classSlider : "",
  //   classDescription : "",
  //   data :[
  //     {
  //       urlImg: "/assets/img/logodragonsolo.svg",
  //       name : "Nombre",
  //       value : "48484",
  //       redirectProduct : () =>{}
  //     }
  //   ]
  // }

}
