import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyASU-9M2U1C7I49tWP6lEb2l44ZisIoyYA",
  authDomain: "fir-34d6e.firebaseapp.com",
  databaseURL: "https://fir-34d6e.firebaseio.com",
  projectId: "fir-34d6e",
  storageBucket: "fir-34d6e.appspot.com",
  messagingSenderId: "963152644174",
  appId: "1:963152644174:web:7544f30f6dc791d61c1b1f",
};
// Initialize Firebase

firebase.initializeApp(config);

export default firebase;
