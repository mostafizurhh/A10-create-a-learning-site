// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgTOZKyL4-r0zfi0tRVjyZxD-kKfiBeW8",
    authDomain: "fun-with-programming.firebaseapp.com",
    projectId: "fun-with-programming",
    storageBucket: "fun-with-programming.appspot.com",
    messagingSenderId: "620266349345",
    appId: "1:620266349345:web:5a5958d466f35db70f5460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;