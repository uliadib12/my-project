// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCgJ6d7ovswOcjt45kX7A0ykHEfSNZaJ4",
  authDomain: "react-f8c61.firebaseapp.com",
  projectId: "react-f8c61",
  storageBucket: "react-f8c61.appspot.com",
  messagingSenderId: "361731391409",
  appId: "1:361731391409:web:bcc77b214f6ac1f110c790",
  measurementId: "G-99PRVBFCM9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const firestore = getFirestore(app)