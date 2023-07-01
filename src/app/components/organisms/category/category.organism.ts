import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.organism.html',
  styleUrls: ['./category.organism.scss']
})
export class CategoryOrganism {
  @Input() dataCategory ={
    titleCategory : "Marcas",
    data : [
      {
        nameMarc : "Marca",
        urlImg : "/assets/img/cap2.png",
        redirect : () => {}
      }
    ]
  }
}
