// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB32Ni9OoG-sapx8oMi8gVAuggz8tLjbtg",
  authDomain: "app-firebase-aad3a.firebaseapp.com",
  projectId: "app-firebase-aad3a",
  storageBucket: "app-firebase-aad3a.appspot.com",
  messagingSenderId: "481273611996",
  appId: "1:481273611996:web:0d9318ff2a4a4c72871619",
  measurementId: "G-T1HY95D75X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);