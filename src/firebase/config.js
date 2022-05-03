// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbXEAA4aTnqjkdXZiuVml8RVrn4WOnj-g",
  authDomain: "ecommerce-fuentes.firebaseapp.com",
  projectId: "ecommerce-fuentes",
  storageBucket: "ecommerce-fuentes.appspot.com",
  messagingSenderId: "42921844704",
  appId: "1:42921844704:web:afe2949325e6a541e59585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=> {
    return app;
}