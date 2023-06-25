import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplate } from './templates/home/home.template';
import { NavbarMolecule } from './molescules/navbar/navbar.molecule';
import { HeaderOrganism } from './organisms/header/header.organism';
import { IconAtom } from './atoms/icon/icon.atom';
import { ArticlePresentationOrganism } from './organisms/article-presentation/article-presentation.organism';
import { FooterOrganism } from './organisms/footer/footer.organism';
import { PresentationIndexOrganism } from './organisms/presentation-index/presentation-index.organism';
import { SectionPhotosOrganism } from './organisms/section-photos/section-photos.organism';
import { SectionPrincipalProductOrganism } from './organisms/section-principal-product/section-principal-product.organism';
import { ArticlePrincipalProductMolecule } from './molescules/article-principal-product/article-principal-product.molecule';
import { ProductTemplate } from './templates/product/product.template';
import { AdministrationTemplate } from './templates/administration/administration.template';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchOrganism } from './organisms/search/search.organism';
import { CardProductMolecule } from './molescules/card-product/card-product.molecule';
import { ViewProductOrganism } from './organisms/view-product/view-product.organism';
import { GaleryTemplate } from './templates/galery/galery.template';


@NgModule({
  declarations: [
    HomeTemplate,
    NavbarMolecule,
    HeaderOrganism,
    IconAtom,
    ArticlePresentationOrganism,
    FooterOrganism,
    PresentationIndexOrganism,
    SectionPhotosOrganism,
    SectionPrincipalProductOrganism,
    ArticlePrincipalProductMolecule,
    ProductTemplate,
    AdministrationTemplate,
    SearchOrganism,
    CardProductMolecule,
    ViewProductOrganism,
    GaleryTemplate
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeTemplate,
    NavbarMolecule,
    HeaderOrganism,
    IconAtom,
    ArticlePresentationOrganism,
    FooterOrganism,
    PresentationIndexOrganism,
    SectionPhotosOrganism,
    SectionPrincipalProductOrganism,
    ProductTemplate,
    AdministrationTemplate,
    SearchOrganism,
    CardProductMolecule,
    ViewProductOrganism,
    GaleryTemplate
  ]
})
export class ComponentsModule { }
