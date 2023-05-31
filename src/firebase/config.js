import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8BrKqoZEFB_mzuhkkShQeCD0wCRjZ-3c",
  authDomain: "thedojosite-e9353.firebaseapp.com",
  projectId: "thedojosite-e9353",
  storageBucket: "thedojosite-e9353.appspot.com",
  messagingSenderId: "635818592075",
  appId: "1:635818592075:web:9a7f2be83bdc4adc1d4ace",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
