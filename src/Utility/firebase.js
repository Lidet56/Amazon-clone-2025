import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQx64IWs-iiFefT5qUSjo20LoRhj0nXHs",
  authDomain: "clone-b9613.firebaseapp.com",
  projectId: "clone-b9613",
  storageBucket: "clone-b9613.firebasestorage.app",
  messagingSenderId: "485031393236",
  appId: "1:485031393236:web:d6ce429bbe3f0ad3170841"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
