import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCTty6MjxlzMD0FYcbWPI9ojOx9HQlNCE",
  authDomain: "techat-8190.firebaseapp.com",
  projectId: "techat-8190",
  storageBucket: "techat-8190.appspot.com",
  messagingSenderId: "1079465355527",
  appId: "1:1079465355527:web:bfe47af47a42683ff13da2",
  measurementId: "G-JX953B9MBR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
