import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLKtHeEeRjQsVg87ddAjpYR32jWbhR7ag",
  authDomain: "zip-3cc5e.firebaseapp.com",
  projectId: "zip-3cc5e",
  storageBucket: "zip-3cc5e.firebasestorage.app",
  messagingSenderId: "623647391865",
  appId: "1:623647391865:web:0eef7595a6378d680654a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
