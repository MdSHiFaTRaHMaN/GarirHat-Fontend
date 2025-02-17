
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCAvz6A-MQDRhIRsn2ArM9XeAV2KE5WvA",
    authDomain: "wings-blast.firebaseapp.com",
    projectId: "wings-blast",
    storageBucket: "wings-blast.firebasestorage.app",
    messagingSenderId: "609170393614",
    appId: "1:609170393614:web:47ba3f9f9cfeb1101f0a5f"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";

export { auth, RecaptchaVerifier, signInWithPhoneNumber };


