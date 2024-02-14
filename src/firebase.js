import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC6329A2lwzvRFH_jNUMpW_nJ8Ln8J34fU",
    authDomain: "my-social-ap.firebaseapp.com",
    projectId: "my-social-ap",
    storageBucket: "my-social-ap.appspot.com",
    messagingSenderId: "58657847595",
    appId: "1:58657847595:web:4d40ee3dad0e904f72ed6e",
    measurementId: "G-B8QQ92HRSZ"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore();