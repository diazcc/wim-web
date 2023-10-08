import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ProfilePersonalModule } from './page/profile-personal/profile-personal.module';
import { ContentUserModule } from './page/content-user/content-user.module';
import { PostUserModule } from './page/post-user/post-user.module';
import { DmModule } from './page/dm/dm.module';
import { ChatModule } from './page/chat/chat.module';
import { NewWimeModule } from './page/new-wime/new-wime.module';
import { FollowsModule } from './page/follows/follows.module';
import { HomeModule } from './page/home/home.module';
import { NewPhotoModule } from './page/new-photo/new-photo.module';
import { SearchModule } from './page/search/search.module';
import { RegisterModule } from './page/register/register.module';
import { NewUserDescriptionModule } from './page/new-user-description/new-user-description.module';
import { PhotoProfileModule } from './page/photo-profile/photo-profile.module';
import { NewDescriptionPage } from './page/new-description/new-description.page';
import { NewDescriptionModule } from './page/new-description/new-description.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProfilePersonalModule,
    ContentUserModule,
    PostUserModule,
    DmModule,
    ChatModule,
    NewWimeModule,
    FollowsModule,
    HomeModule,
    NewPhotoModule,
    SearchModule,
    RegisterModule,
    NewUserDescriptionModule,
    PhotoProfileModule,
    NewDescriptionModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth())
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
