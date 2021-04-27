import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhcRMPP1qmlA2uHL4r6XRyfaKuSF1tKUA",
  authDomain: "mark--up.firebaseapp.com",
  projectId: "mark--up",
  storageBucket: "mark--up.appspot.com",
  messagingSenderId: "124879348077",
  appId: "1:124879348077:web:b3477df367519e0a9f7a64",
  measurementId: "G-R0EPM6E72S",
};

firebase.initializeApp(firebaseConfig);
