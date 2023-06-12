import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplate } from './templates/home/home.template';
import { NavbarMolecule } from './molescules/navbar/navbar.molecule';
import { HeaderOrganism } from './organisms/header/header.organism';



@NgModule({
  declarations: [
    HomeTemplate,
    NavbarMolecule,
    HeaderOrganism
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeTemplate,
    NavbarMolecule,
    HeaderOrganism
  ]
})
export class ComponentsModule { }
