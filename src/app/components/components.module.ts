import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplate } from './templates/home/home.template';
import { NavbarMolecule } from './molescules/navbar/navbar.molecule';
import { HeaderOrganism } from './organisms/header/header.organism';
import { IconAtom } from './atoms/icon/icon.atom';
import { ArticlePresentationOrganism } from './organisms/article-presentation/article-presentation.organism';



@NgModule({
  declarations: [
    HomeTemplate,
    NavbarMolecule,
    HeaderOrganism,
    IconAtom,
    ArticlePresentationOrganism
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeTemplate,
    NavbarMolecule,
    HeaderOrganism,
    IconAtom,
    ArticlePresentationOrganism
  ]
})
export class ComponentsModule { }
