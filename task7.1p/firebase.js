// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBPjeZjvoxpxLXsmrUpRe-4WjIksjITZg",
  authDomain: "frontendgrp2.firebaseapp.com",
  projectId: "frontendgrp2",
  storageBucket: "frontendgrp2.firebasestorage.app",
  messagingSenderId: "417476167852",
  appId: "1:417476167852:web:3d329dfe181bb265dcb709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
