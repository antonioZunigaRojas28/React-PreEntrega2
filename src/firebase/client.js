// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChZKtGH5zYxcEYPlSFwLj47yj2D-OfIQs",
  authDomain: "ecommerce57770-914d3.firebaseapp.com",
  projectId: "ecommerce57770-914d3",
  storageBucket: "ecommerce57770-914d3.appspot.com",
  messagingSenderId: "818743782302",
  appId: "1:818743782302:web:f22bcd340c5972290b848f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);