import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.organism.html',
  styleUrls: ['./search.organism.scss']
})
export class SearchOrganism {
 @Input() classSearch ="hidde";
 @Input() dataSearch = {
  classSearch : "hidde",
  closeSearch : () =>{},
  dataCardProduct : [
    {
      urlImgPrincipalProduct : "/assets/img/logodragonsolo.svg",
      textTitle : "--",
      textDescription :"--",
      textValue : "--",
      clickProduct : () =>{}
    },
    {
      urlImgPrincipalProduct : "/assets/img/logodragonsolo.svg",
      textTitle : "--",
      textDescription :"--",
      textValue : "--",
      clickProduct : () =>{}
    }
  ]
 }
  @Input() dataCardProduct = {

  }
}
