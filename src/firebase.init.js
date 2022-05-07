// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlQeGi04MlSQeZ2HTgcrDYXRdt54dQxhk",
    authDomain: "warehouse-management-cli-5198c.firebaseapp.com",
    projectId: "warehouse-management-cli-5198c",
    storageBucket: "warehouse-management-cli-5198c.appspot.com",
    messagingSenderId: "357147865585",
    appId: "1:357147865585:web:ef13542931f15af6b61450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;