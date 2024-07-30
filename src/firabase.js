import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyv-CvbC-iKAITIM6A_UiqqkRXvKTEuSQ",
    authDomain: "notes-app-1b038.firebaseapp.com",
    projectId: "notes-app-1b038",
    storageBucket: "notes-app-1b038.appspot.com",
    messagingSenderId: "941093786218",
    appId: "1:941093786218:web:3695297302fb8ea2e2f013",
    measurementId: "G-ZHXH4CW56J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };