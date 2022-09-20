import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALcWnrbugzbqV-xxsPjXLXtzrlaDoYn0M",
    authDomain: "quiz-app-7ea4b.firebaseapp.com",
    projectId: "quiz-app-7ea4b",
    storageBucket: "quiz-app-7ea4b.appspot.com",
    messagingSenderId: "1082851274971",
    appId: "1:1082851274971:web:45acfa13da8d7c25c85cfe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore();

export { auth, db };