// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUNRZITRM1sjcbab7rrng1XvPIzqolRpY",
  authDomain: "coderhouse-ecommerce-c5ebe.firebaseapp.com",
  projectId: "coderhouse-ecommerce-c5ebe",
  storageBucket: "coderhouse-ecommerce-c5ebe.appspot.com",
  messagingSenderId: "14096184394",
  appId: "1:14096184394:web:86f22c44a6fecebf30a2b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();