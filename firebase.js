// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsLF7NVR6l5ZFOo9Hi0njf77rikf4kCE4",
  authDomain: "inventory-management-1727e.firebaseapp.com",
  projectId: "inventory-management-1727e",
  storageBucket: "inventory-management-1727e.appspot.com",
  messagingSenderId: "253821226783",
  appId: "1:253821226783:web:4768c47d5481b2b097aa2a",
  measurementId: "G-LN1H6J2M20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };
