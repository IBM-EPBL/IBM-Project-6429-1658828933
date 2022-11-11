// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcOcMZ7bTgSSlBHThr6DQ8wjAEQKbHqrI",
  authDomain: "fire-management-system-19220.firebaseapp.com",
  projectId: "fire-management-system-19220",
  storageBucket: "fire-management-system-19220.appspot.com",
  messagingSenderId: "471571648481",
  appId: "1:471571648481:web:811b80171aaa5bb2578ca0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

export {firebase, firebaseApp, auth, googleProvider, fbProvider};