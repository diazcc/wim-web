import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './page/home/home.page';

const routes: Routes = [
  {path:'home', component:HomePage},
  {path:'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
