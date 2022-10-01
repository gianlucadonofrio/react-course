import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {};

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  firebaseConfig.apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
  firebaseConfig.authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
  firebaseConfig.projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
  firebaseConfig.storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
  firebaseConfig.messagingSenderId =
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
  firebaseConfig.appId = process.env.REACT_APP_FIREBASE_APP_ID;
} else {
  firebaseConfig.apiKey = process.env.FIREBASE_API_KEY;
  firebaseConfig.authDomain = process.env.FIREBASE_AUTH_DOMAIN;
  firebaseConfig.projectId = process.env.FIREBASE_PROJECT_ID;
  firebaseConfig.storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
  firebaseConfig.messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
  firebaseConfig.appId = process.env.FIREBASE_APP_ID;
}
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
