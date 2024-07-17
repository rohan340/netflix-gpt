// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUNnFk5YmqnGwtAoS9IDG0y_sA3VYJXf8",
  authDomain: "netflixgpt-1a940.firebaseapp.com",
  projectId: "netflixgpt-1a940",
  storageBucket: "netflixgpt-1a940.appspot.com",
  messagingSenderId: "70568145573",
  appId: "1:70568145573:web:98589322ea23d923d5134c",
  measurementId: "G-V6D9JWR5CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();