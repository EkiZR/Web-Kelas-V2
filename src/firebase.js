// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
 apiKey: "AIzaSyCD51rvjnYVPYIeLQJK60wRlWh0_fF4Rgc",
  authDomain: "jokiwebkelas.firebaseapp.com",
  projectId: "jokiwebkelas",
  storageBucket: "jokiwebkelas.firebasestorage.app",
  messagingSenderId: "816274800618",
  appId: "1:816274800618:web:b1143ab4f274fe9bf3fc93"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();