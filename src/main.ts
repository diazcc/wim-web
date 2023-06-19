import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAEZ_LiG5hmvDSgbJe2aBECwwv0zWvzq-E",
  authDomain: "infinity-industry-73a15.firebaseapp.com",
  projectId: "infinity-industry-73a15",
  storageBucket: "infinity-industry-73a15.appspot.com",
  messagingSenderId: "1095543743408",
  appId: "1:1095543743408:web:465f2263bff22d95cd2c75"
};

// const app = initializeApp(firebaseConfig);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
