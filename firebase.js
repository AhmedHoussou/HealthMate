import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyCFkwD0w47s5yJyPyK8KhneUnkstFk-4u4",
    authDomain: "healthmate-9855d.firebaseapp.com",
    projectId: "healthmate-9855d",
    storageBucket: "healthmate-9855d.appspot.com",
    messagingSenderId: "192891445893",
    appId: "1:192891445893:web:3e456e922a321bae4effec",
    measurementId: "G-63EV4LHFLZ"
  };

  let app;
  if (firebase.apps.length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }
  const db = getFirestore(app);
  const auth = getAuth(app);
  export { auth, db };