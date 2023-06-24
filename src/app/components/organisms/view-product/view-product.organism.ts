import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.organism.html',
  styleUrls: ['./view-product.organism.scss']
})
export class ViewProductOrganism {

  @Input() dataViewProduct = {
    urlImg : "",
    value : "",
    description : ""
  }
}
