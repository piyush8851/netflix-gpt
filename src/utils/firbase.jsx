// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQHfpVs4GilUvGORyM7KhKgrzZq7bx4o4",
  authDomain: "netflix-gpt-84fee.firebaseapp.com",
  projectId: "netflix-gpt-84fee",
  storageBucket: "netflix-gpt-84fee.firebasestorage.app",
  messagingSenderId: "450038238632",
  appId: "1:450038238632:web:08f7971abb945de264e19d",
  measurementId: "G-YJS5M02QTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();