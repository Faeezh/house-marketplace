import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyADBDeps-2ercCVgXNkJvnvJvPgJJB9xj0",
  authDomain: "house-marketplace-app-950eb.firebaseapp.com",
  projectId: "house-marketplace-app-950eb",
  storageBucket: "house-marketplace-app-950eb.appspot.com",
  messagingSenderId: "241876224475",
  appId: "1:241876224475:web:28e4b268d5a7d02f92fffe"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore()