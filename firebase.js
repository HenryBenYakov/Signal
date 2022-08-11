import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2gC0NoCr8fqJMZ6r0LBVhjv2Kcxwzavo",
  authDomain: "signal-77ec6.firebaseapp.com",
  projectId: "signal-77ec6",
  storageBucket: "signal-77ec6.appspot.com",
  messagingSenderId: "369960067587",
  appId: "1:369960067587:web:05dc7ba5e2a843738a6436",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
