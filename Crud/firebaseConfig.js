// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2mveUXmX8YZ093Dy1UPeQGna8JdDb9ec",
    authDomain: "boletin-virtual.firebaseapp.com",
    projectId: "boletin-virtual",
    storageBucket: "boletin-virtual.appspot.com",
    messagingSenderId: "107832750012",
    appId: "1:107832750012:web:53d434cde9a73b915305b9",
    measurementId: "G-4FHWJ2C5RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { db };