import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      projectId: "login-3d683",
      appId: "1:350187177666:web:97af413a0b915894235d5b",
      storageBucket: "login-3d683.firebasestorage.app",
      apiKey: "AIzaSyC2CoDmxAz0fGXtD6fqnUV1f5nLpCTRAto",
      authDomain: "login-3d683.firebaseapp.com",
      messagingSenderId: "350187177666",
      measurementId: "G-VG40ZCMS0E"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
