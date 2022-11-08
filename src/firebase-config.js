// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCtb7-L2f5Rbf7s0fXjsQ0GB5_ekzKYhY",
  authDomain: "loggin-app-fdff0.firebaseapp.com",
  projectId: "loggin-app-fdff0",
  storageBucket: "loggin-app-fdff0.appspot.com",
  messagingSenderId: "835028777268",
  appId: "1:835028777268:web:84ce816770ddd0256b8d61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
