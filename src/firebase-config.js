import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBafBB7w_xm6NUoIF1IDT7ghKDg165j7H8",
  authDomain: "first-firestore-4b40a.firebaseapp.com",
  projectId: "first-firestore-4b40a",
  storageBucket: "first-firestore-4b40a.appspot.com",
  messagingSenderId: "484987612855",
  appId: "1:484987612855:web:510b2468dc781fbec42732",
  measurementId: "G-HCGE9SX95C",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
