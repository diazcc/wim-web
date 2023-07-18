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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GaleryModule } from './page/galery/galery.module';
import { LoginModule } from './page/login/login.module';
import { AdmHomeModule } from './page/adm-home/adm-home.module';
import { AdmProductModule } from './page/adm-product/adm-product.module';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewCategoryModule } from './page/new-category/new-category.module';
import { NewProductModule } from './page/new-product/new-product.module';
import { ModifyCategoryModule } from './page/modify-category/modify-category.module';
import { FeaturedProductsModule } from './page/featured-products/featured-products.module';

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
    NewCategoryModule,
    NewProductModule,
    ModifyCategoryModule,
    FeaturedProductsModule,
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
