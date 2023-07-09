import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdmCategoryPage } from './adm-category.page';

const routes : Routes = [{path:'', component: AdmCategoryPage}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdmCategoryRoutingModule { }
