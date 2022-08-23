import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCqpGrxBEEZWwyWoSZDqJbdEWC1H-kRu8Q",
  authDomain: "journalapp-gian.firebaseapp.com",
  projectId: "journalapp-gian",
  storageBucket: "journalapp-gian.appspot.com",
  messagingSenderId: "330583025516",
  appId: "1:330583025516:web:5e1bd19ec621a30d547549",
};

export const FirbaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirbaseApp);
export const FirebaseDB = getFirestore(FirbaseApp);
