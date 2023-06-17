import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTemplate } from './components/templates/home/home.template';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './page/home/home.module';
import { IndexPage } from './page/index/index.page';

@NgModule({
  declarations: [
    AppComponent,
    IndexPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
