import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userGuard } from './guards/user.guard';

const routes: Routes = [
  {path:'login',loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule)},
  {path:'profileUser',canActivate :[userGuard],
  loadChildren: () => import('./page/profile-personal/profile-personal.module').then(m => m.ProfilePersonalModule)
  },
  {path:'contentUser',
  canActivate :[userGuard],loadChildren: () => import('./page/content-user/content-user.module').then(m => m.ContentUserModule)},
  {path:'post',canActivate :[userGuard],
  loadChildren: () => import('./page/post-user/post-user.module').then(m => m.PostUserModule)},
  {path:'dm',canActivate :[userGuard],
  loadChildren: () => import('./page/dm/dm.module').then(m => m.DmModule)},
  {path:'chat',canActivate :[userGuard],
  loadChildren: () => import('./page/chat/chat.module').then(m => m.ChatModule)},
  {path:'newWime',canActivate :[userGuard],
  loadChildren: () => import('./page/new-wime/new-wime.module').then(m => m.NewWimeModule)},
  {path:'follows',canActivate :[userGuard],
  loadChildren: () => import('./page/follows/follows.module').then(m => m.FollowsModule)},
  {path:'newPost',canActivate :[userGuard],
  loadChildren: () => import('./page/new-photo/new-photo.module').then(m => m.NewPhotoModule)},
  {path:'search',canActivate :[userGuard],
  loadChildren: () => import('./page/search/search.module').then(m => m.SearchModule)},
  {path:'register',loadChildren: () => import('./page/register/register.module').then(m => m.RegisterModule)},
  {path:'home',canActivate :[userGuard],
  loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)},
  {path:'**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
