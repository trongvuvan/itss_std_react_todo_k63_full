import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBgLUglbRyoXp5riRkv9jYO4kIjdZjSVOM",

  authDomain: "fire-base-project-9b2f5.firebaseapp.com",

  projectId: "fire-base-project-9b2f5",

  storageBucket: "fire-base-project-9b2f5.appspot.com",

  messagingSenderId: "694393178115",

  appId: "1:694393178115:web:12a0528da94217dc872636"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

