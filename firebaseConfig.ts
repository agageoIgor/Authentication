import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkAWl-cXkACjMAQaej-PyXscPIZ8LUigo",
  authDomain: "authentication-931b5.firebaseapp.com",
  projectId: "authentication-931b5",
  storageBucket: "authentication-931b5.appspot.com",
  messagingSenderId: "548454846778",
  appId: "1:548454846778:web:23717e68d7c92b604a4003"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)