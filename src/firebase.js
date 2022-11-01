import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqHcaz9Bf9bdbBTS4ZR8BU2nS3rY1iQwo",
  authDomain: "react-netflix-cd030.firebaseapp.com",
  projectId: "react-netflix-cd030",
  storageBucket: "react-netflix-cd030.appspot.com",
  messagingSenderId: "736989738252",
  appId: "1:736989738252:web:84e0c91e0465c21e1e0529",
  measurementId: "G-1B7MK0T755"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);