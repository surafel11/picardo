// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV9ZlETKcKmNa4al7qucUVXPEtT2x1TuE",
  authDomain: "picardo-c53ad.firebaseapp.com",
  projectId: "picardo-c53ad",
  storageBucket: "picardo-c53ad.appspot.com",
  messagingSenderId: "56974289544",
  appId: "1:56974289544:web:e7487b73f559006b6e0d3d",
  measurementId: "G-D1Y9Y24P0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);