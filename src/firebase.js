// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // If you're using Firestore
import { getAuth } from "firebase/auth"; // If you're using Authentication
// Add other services you need

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

// Initialize services
const db = getFirestore(app); // Firestore
const auth = getAuth(app); // Authentication

export { app, db, auth };
