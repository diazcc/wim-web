import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-principal-product',
  templateUrl: './article-principal-product.molecule.html',
  styleUrls: ['./article-principal-product.molecule.scss']
})
export class ArticlePrincipalProductMolecule {

  @Input() dataPrincipalProduct = {
    urlImgPrincipalProduct : "/assets/img/gorra-principal.jpg",
    textTitle : "",
    textDescription :"",
    textValue : "",
    clickProduct : ()=>{ console.log("SADADAS")}
  }



}

