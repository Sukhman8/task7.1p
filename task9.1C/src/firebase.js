// src/firebase.js

// Import Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // optional, if you want database later

// Your web app's Firebase configuration (YOUR credentials)
const firebaseConfig = {
  apiKey: "AIzaSyCOuWyja1OTv0-HjxzPtLYLmg0k4FiQJfI",
  authDomain: "devdeakinapp-b5bd4.firebaseapp.com",
  projectId: "devdeakinapp-b5bd4",
  storageBucket: "devdeakinapp-b5bd4.appspot.com",   //  fixed suffix
  messagingSenderId: "879617567499",
  appId: "1:879617567499:web:6a328f7181487eccd2500e",
  measurementId: "G-RTB3XRTGQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// (optional) Initialize Firestore
export const db = getFirestore(app);
