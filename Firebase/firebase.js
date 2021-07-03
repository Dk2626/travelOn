import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKQEiXzeMMaakxRojruBk7rQiT5OH2o9s",
  authDomain: "travelon-771b7.firebaseapp.com",
  projectId: "travelon-771b7",
  storageBucket: "travelon-771b7.appspot.com",
  messagingSenderId: "407164302678",
  appId: "1:407164302678:web:fa283d08946e7a49b212f7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
const auth = firebase.auth();

export { auth };
export default db;
