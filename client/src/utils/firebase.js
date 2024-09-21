// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-9dbab.firebaseapp.com",
  projectId: "task-manager-9dbab",
  storageBucket: "task-manager-9dbab.appspot.com",
  messagingSenderId: "367911351907",
  appId: "1:367911351907:web:6a16314b43eac2c5482a56"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);