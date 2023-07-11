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
import { ProductTemplate } from './templates/product/product.template';
import { AdministrationTemplate } from './templates/administration/administration.template';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchOrganism } from './organisms/search/search.organism';
import { CardProductMolecule } from './molescules/card-product/card-product.molecule';
import { ViewProductOrganism } from './organisms/view-product/view-product.organism';
import { GaleryTemplate } from './templates/galery/galery.template';
import { CategoryOrganism } from './organisms/category/category.organism';
import { SliderOrganism } from './organisms/slider/slider.organism';
import { LoginTemplate } from './templates/login/login.template';
import { AdmHomeTemplate } from './templates/adm-home/adm-home.template';
import { AdmProductTemplate } from './templates/adm-product/adm-product.template';
import { NewCategoryTemplate } from './templates/new-category/new-category.template';
import { NewProductTemplate } from './templates/new-product/new-product.template';
import { AlertMolecule } from './molescules/alert/alert.molecule';


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
    ProductTemplate,
    AdministrationTemplate,
    SearchOrganism,
    CardProductMolecule,
    ViewProductOrganism,
    GaleryTemplate,
    CategoryOrganism,
    SliderOrganism,
    LoginTemplate,
    AdmHomeTemplate,
    AdmProductTemplate,
    NewCategoryTemplate,
    NewProductTemplate,
    AlertMolecule
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
    GaleryTemplate,
    CategoryOrganism,
    SliderOrganism,
    LoginTemplate,
    AdmHomeTemplate,
    AdmProductTemplate,
    NewCategoryTemplate,
    NewProductTemplate,
    AlertMolecule
  ]
})
export class ComponentsModule { }
