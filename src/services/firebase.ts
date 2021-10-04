import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDOBZuhKAtMELJ_aJJLPj_GTYHJG-KtRBk",
  authDomain: "letmeask-183d0.firebaseapp.com",
  databaseURL: "https://letmeask-183d0-default-rtdb.firebaseio.com",
  projectId: "letmeask-183d0",
  storageBucket: "letmeask-183d0.appspot.com",
  messagingSenderId: "946924112771",
  appId: "1:946924112771:web:46ffee394928239302c4b6"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();


export {firebase,auth,database};





