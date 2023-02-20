// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBoMo9LcSW2JIsf5_v2_cN0pSwpoxzxpw",
  authDomain: "doctors-c2132.firebaseapp.com",
  projectId: "doctors-c2132",
  storageBucket: "doctors-c2132.appspot.com",
  messagingSenderId: "500679494800",
  appId: "1:500679494800:web:2c3aeb825a05425090dc15",
  measurementId: "G-P311BZEZHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db}

