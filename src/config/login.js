import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBGYFvBHKQmQM7lNasVwWVswNHEy9A8UDw",
    authDomain: "authentication-b4584.firebaseapp.com",
    projectId: "authentication-b4584",
    storageBucket: "authentication-b4584.appspot.com",
    messagingSenderId: "2869570521",
    appId: "1:2869570521:web:9da7056dff675c864c87c8",
    measurementId: "G-TNS6BF2RWZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore();
const analytics = getAnalytics(app);

export { auth, db };