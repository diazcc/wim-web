import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './page/index/index.page';

const routes: Routes = [
  {path:'index', component:IndexPage},
  {path:'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)},
  {path:'**', pathMatch:'full', redirectTo:'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
