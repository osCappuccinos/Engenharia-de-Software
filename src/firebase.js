import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEkJyNaOnlCWEKXAeBaL2p-Spzj2GWRnE",
    authDomain: "lista-de-compras-fc76a.firebaseapp.com",
    projectId: "lista-de-compras-fc76a",
    storageBucket: "lista-de-compras-fc76a.firebasestorage.app",
    messagingSenderId: "158886457966",
    appId: "1:158886457966:web:c5aeadfa924585f054ac7f"
  };
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);