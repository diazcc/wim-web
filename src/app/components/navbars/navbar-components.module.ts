import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from './header/header.navbar-component';
import { NavbarNavbarComponent } from './navbar/navbar.navbar-component';
import { MenuNavbarComponent } from './menu/menu.navbar-component';
import { NewPostOptionNavbarComponent } from './new-post-option/new-post-option.navbar-component';



@NgModule({
  declarations: [
    HeaderNavbarComponent,
    NavbarNavbarComponent,
    MenuNavbarComponent,
    NewPostOptionNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderNavbarComponent,
    NavbarNavbarComponent,
    MenuNavbarComponent,
    NewPostOptionNavbarComponent
  ]
})
export class NavbarComponentsModule { }
