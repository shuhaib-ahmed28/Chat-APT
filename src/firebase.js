// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBawQhRragwFzQF0hwtpTVHFsIeLOFS0Z4",
  authDomain: "chat-apt-e5c9e.firebaseapp.com",
  projectId: "chat-apt-e5c9e",
  storageBucket: "chat-apt-e5c9e.appspot.com",
  messagingSenderId: "1074734618755",
  appId: "1:1074734618755:web:dbbdaad8508f8f6dafa3b6",
  measurementId: "G-8BCX2P3T0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
