import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.molecule.html',
  styleUrls: ['./card-product.molecule.scss']
})
export class CardProductMolecule {
  @Input() dataCardProduct = {
    urlImgPrincipalProduct : "",
    textTitle : "",
    textDescription :"",
    textValue : "",
    clickProduct : () =>{}
  }
}
