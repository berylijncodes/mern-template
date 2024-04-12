// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-template-78951.firebaseapp.com",
  projectId: "mern-template-78951",
  storageBucket: "mern-template-78951.appspot.com",
  messagingSenderId: "405196838395",
  appId: "1:405196838395:web:e9130eab0f11f4033f675e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);