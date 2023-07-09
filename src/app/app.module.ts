import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './page/home/home.module';
import { ProductModule } from './page/product/product.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AdminRoutingModule } from './page/adminitration/admin-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GaleryModule } from './page/galery/galery.module';
import { LoginModule } from './page/login/login.module';
import { AdmHomeModule } from './page/adm-home/adm-home.module';
import { AdmProductPage } from './page/adm-product/adm-product.page';
import { AdmProductModule } from './page/adm-product/adm-product.module';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AdmCategoryPage } from './page/adm-category/adm-category.page';
import { AdmCategoryModule } from './page/adm-category/adm-category.module';
import { NewCategoryPage } from './page/new-category/new-category.page';
import { NewCategoryModule } from './page/new-category/new-category.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HomeModule,
    ProductModule,
    GaleryModule,
    LoginModule,
    AdmHomeModule,
    AdmProductModule,
    AdmCategoryModule,
    NewCategoryModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    FormsModule,
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
