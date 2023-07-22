import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './page/home/home.page';
import { adminGuard } from './page/guard/admin.guard';
import { validateLoginGuard } from './page/guard/validate-login.guard';

const routes: Routes = [
  {path:'home', component:HomePage},
  {path:'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)},
  {path:'product', loadChildren: () => import('./page/product/product.module').then(m => m.ProductModule)},
  {path:'galery', loadChildren: () => import('./page/galery/galery.module').then(m => m.GaleryModule)},
  {path:'login',canActivate :[validateLoginGuard],
   loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule)},
  {path:'admProduct',
  canActivate :[adminGuard],
   loadChildren: () => import('./page/adm-product/adm-product.module').then(m => m.AdmProductModule)},
  {path:'newCategory',
  canActivate :[adminGuard],
   loadChildren: () => import('./page/new-category/new-category.module').then(m => m.NewCategoryModule)},
  {path:'newCategory',
  canActivate :[adminGuard],
   loadChildren: () => import('./page/new-category/new-category.module').then(m => m.NewCategoryModule)},
  {path:'modifyCategory',
  canActivate :[adminGuard],
   loadChildren: () => import('./page/modify-category/modify-category.module').then(m => m.ModifyCategoryModule)},
  {path:'newProduct', loadChildren: () => import('./page/new-product/new-product.module').then(m => m.NewProductModule)},
  {path:'featuredProducts',
  canActivate :[adminGuard],
   loadChildren: () => import('./page/featured-products/featured-products.module').then(m => m.FeaturedProductsModule)},
  {path:'admHome',
    canActivate :[adminGuard],
    loadChildren: () => import('./page/adm-home/adm-home.module').then(m => m.AdmHomeModule)
  },
  {path:'administration', loadChildren: () => import('./page/adminitration/administration.module').then(m => m.AdministrationModule)},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
