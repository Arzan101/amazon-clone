import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLFLu6RY9ArlTww_NPV_7Ws-N61FYGgnQ",
  authDomain: "clone-a4bf9.firebaseapp.com",
  projectId: "clone-a4bf9",
  storageBucket: "clone-a4bf9.appspot.com",
  messagingSenderId: "150366921500",
  appId: "1:150366921500:web:934219f2ad53251d6950d9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export{db,auth};