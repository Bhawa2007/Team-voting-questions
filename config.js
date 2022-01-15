import firebase from 'firebase';

// add SDK Firebase// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs1IXQKkwEfRyHfChZAZGTYfEnNEXY9wQ",
  authDomain: "voting-17581.firebaseapp.com",
  projectId: "voting-17581",
  storageBucket: "voting-17581.appspot.com",
  messagingSenderId: "410383737137",
  appId: "1:410383737137:web:3725753e31a306b9a01010"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();