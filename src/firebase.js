// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrOo9VNjfg8LJytR44AytcIKixef7GsUU",
  authDomain: "chat-app-react-c839d.firebaseapp.com",
  projectId: "chat-app-react-c839d",
  storageBucket: "chat-app-react-c839d.appspot.com",
  messagingSenderId: "158006118706",
  appId: "1:158006118706:web:6c0b45f195eb63c75def2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
