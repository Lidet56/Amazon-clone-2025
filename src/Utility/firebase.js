
import firebase from "firebase/compact/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQx64IWs-iiFefT5qUSjo20LoRhj0nXHs",
  authDomain: "clone-b9613.firebaseapp.com",
  projectId: "clone-b9613",
  storageBucket: "clone-b9613.firebasestorage.app",
  messagingSenderId: "485031393236",
  appId: "1:485031393236:web:d6ce429bbe3f0ad3170841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore();