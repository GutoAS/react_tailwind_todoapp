// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY6XCLU8ulkbgSpslP9CiU7kOLW5fCijU",
  authDomain: "todo-app-79397.firebaseapp.com",
  projectId: "todo-app-79397",
  storageBucket: "todo-app-79397.appspot.com",
  messagingSenderId: "96310522161",
  appId: "1:96310522161:web:4590e2caed1eadcb0ec010",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
