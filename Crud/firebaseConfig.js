import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2mveUXmX8YZ093Dy1UPeQGna8JdDb9ec",
  authDomain: "boletin-virtual.firebaseapp.com",
  projectId: "boletin-virtual",
  storageBucket: "boletin-virtual.appspot.com",
  messagingSenderId: "107832750012",
  appId: "1:107832750012:web:53d434cde9a73b915305b9",
  measurementId: "G-4FHWJ2C5RF"
};

// Inicializar Firebase
const appFirebase = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(appFirebase);


