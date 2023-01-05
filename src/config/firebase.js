// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjhiwwp1B3faay6mylIDzMsBHd45G6U2Q",
  authDomain: "jatmo-microlending.firebaseapp.com",
  projectId: "jatmo-microlending",
  storageBucket: "jatmo-microlending.appspot.com",
  messagingSenderId: "74621621234",
  appId: "1:74621621234:web:7a3b9d5ddf31f82016d16b",
  measurementId: "G-P3S8YQCWK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;