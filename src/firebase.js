// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJUl5aIhukh_VAsQX82pDPgLqBuv2vWqM",
  authDomain: "todo-app-maria.firebaseapp.com",
  projectId: "todo-app-maria",
  storageBucket: "todo-app-maria.appspot.com",
  messagingSenderId: "988093889682",
  appId: "1:988093889682:web:82e80d2b5106ee71b8fa4b",
  measurementId: "G-91ZVTNJEEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);