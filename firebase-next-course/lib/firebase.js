import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


let firebaseConfig = {
    apiKey: "AIzaSyAt-VZAiIfYjwrC6S6nxUwbt0t2cTfloZ8",
    authDomain: "fir-data-modeling-course-e5837.firebaseapp.com",
    projectId: "fir-data-modeling-course-e5837",
    storageBucket: "fir-data-modeling-course-e5837.appspot.com",
    messagingSenderId: "667728188039",
    appId: "1:667728188039:web:57425baf8c06130a2dde22"
};

// Firebase instance
const app = initializeApp(firebaseConfig);

// Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

// Setting up test enviroment
// if (location.hostname === 'localhost') {
//     connectFirestoreEmulator(db, 'localhost', 8080);
//     connectAuthEmulator(auth, "http://localhost:9099");
// }

export {
    db,
    auth
}