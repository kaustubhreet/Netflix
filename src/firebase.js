// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUMwoll0Fn2qznN376iM7j9cXXgu9Pb28",
  //authDomain: "movies-e16e6.firebaseapp.com",
  authDomain:"https://reet-netflix.netlify.app",
  projectId: "movies-e16e6",
  storageBucket: "movies-e16e6.appspot.com",
  messagingSenderId: "308445837436",
  appId: "1:308445837436:web:e6480c66701452908571f9",
  measurementId: "G-FS7GM8Y0TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;