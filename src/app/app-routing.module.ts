import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPresentationPage } from './page/index-presentation/index-presentation.page';

const routes: Routes = [
  {path:'login', component:IndexPresentationPage},
  {path:'profileUser',loadChildren: () => import('./page/profile-personal/profile-personal.module').then(m => m.ProfilePersonalModule)},
  {path:'contentUser',loadChildren: () => import('./page/content-user/content-user.module').then(m => m.ContentUserModule)},
  {path:'post',loadChildren: () => import('./page/post-user/post-user.module').then(m => m.PostUserModule)},
  {path:'dm',loadChildren: () => import('./page/dm/dm.module').then(m => m.DmModule)},
  {path:'chat',loadChildren: () => import('./page/chat/chat.module').then(m => m.ChatModule)},
  {path:'newWime',loadChildren: () => import('./page/new-wime/new-wime.module').then(m => m.NewWimeModule)},
  {path:'follows',loadChildren: () => import('./page/follows/follows.module').then(m => m.FollowsModule)},
  {path:'newPost',loadChildren: () => import('./page/new-photo/new-photo.module').then(m => m.NewPhotoModule)},
  {path:'search',loadChildren: () => import('./page/search/search.module').then(m => m.SearchModule)},
  {path:'register',loadChildren: () => import('./page/register/register.module').then(m => m.RegisterModule)},
  {path:'home',loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)},
  {path:'**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
