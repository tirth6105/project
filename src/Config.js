// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANvCBHNWuw2y7gZfh2tU0g3DJvNvzPu8U",
  authDomain: "authantication-2f1b8.firebaseapp.com",
  projectId: "authantication-2f1b8",
  storageBucket: "authantication-2f1b8.appspot.com",
  messagingSenderId: "839723384235",
  appId: "1:839723384235:web:a170acb8cedd7648bfa6ee",
  measurementId: "G-93EMYWDS91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export const googleauth = ()=>{
    let provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider)
}
