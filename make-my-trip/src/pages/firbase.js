// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpLmSGesWQ6W2iBih2ZEAIhoBS1QPNg7c",
  authDomain: "login-otp-68ca6.firebaseapp.com",
  projectId: "login-otp-68ca6",
  storageBucket: "login-otp-68ca6.appspot.com",
  messagingSenderId: "234189679626",
  appId: "1:234189679626:web:327b2744f31776641cc3f3",
  measurementId: "G-NHSB0Q8ZFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
