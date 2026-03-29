// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authaiexamnotes-b2b30.firebaseapp.com",
  projectId: "authaiexamnotes-b2b30",
  storageBucket: "authaiexamnotes-b2b30.firebasestorage.app",
  messagingSenderId: "114933621080",
  appId: "1:114933621080:web:6bee808f60d057e05c852d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth , provider}
