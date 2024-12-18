// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDdsN28CbRjYSnrY2JvWkjL4Rbq8f3CH6c",
    authDomain: "kartofjoe-8ffba.firebaseapp.com",
    projectId: "kartofjoe-8ffba",
    storageBucket: "kartofjoe-8ffba.firebasestorage.app",
    messagingSenderId: "574997453645",
    appId: "1:574997453645:web:2c4264d3e6e8c253e1b504",
    measurementId: "G-C4ELD153FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
