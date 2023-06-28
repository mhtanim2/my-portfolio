import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEB3BkrCD4FIUzTMxcBX_7Ibr4-_lIfUg",
  authDomain: "my-portfolio-3f580.firebaseapp.com",
  projectId: "my-portfolio-3f580",
  storageBucket: "my-portfolio-3f580.appspot.com",
  messagingSenderId: "38612805432",
  appId: "1:38612805432:web:905c7253c7d6cdafea83cd"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
