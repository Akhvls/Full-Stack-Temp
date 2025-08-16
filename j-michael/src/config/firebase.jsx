// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import dotenv from "dotenv";
dotenv.config();


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFu4pQqyiwD6BnEaHmFlZqLN3GmccjpXA",
    authDomain: "work-contract-e72e0.firebaseapp.com",
    projectId: "work-contract-e72e0",
    storageBucket: "work-contract-e72e0.firebasestorage.app",
    messagingSenderId: "136314455914",
    appId: "1:136314455914:web:eccc3bc8fc751c3ee2c713",
    measurementId: "G-1VFPESPHSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);
