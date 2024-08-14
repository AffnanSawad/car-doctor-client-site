// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzUIIi1G0u0X93wkgTkN1ToZpcpO6bXNg",
    authDomain: "car-doctor-client-6ce69.firebaseapp.com",
    projectId: "car-doctor-client-6ce69",
    storageBucket: "car-doctor-client-6ce69.appspot.com",
    messagingSenderId: "538554665819",
    appId: "1:538554665819:web:6f92fe576c541b7274e87e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;