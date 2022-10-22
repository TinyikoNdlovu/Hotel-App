import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAw1x195zjL13X2pEeFHi87MikrXQNDQxE",
    authDomain: "hotel-booking-1b3d1.firebaseapp.com",
    projectId: "hotel-booking-1b3d1",
    storageBucket: "hotel-booking-1b3d1.appspot.com",
    messagingSenderId: "796429591057",
    appId: "1:796429591057:web:5039aa49c1917e44d907b0",
    measurementId: "G-D3EE5L0E2Q"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { firebase, db, auth, storage };

