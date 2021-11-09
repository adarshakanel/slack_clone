// config for firebase
import firebase from "firebase";
// import { initializeApp } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGIVc9BXNEGmd821Qx4IHtMFuKjXPDAYw",
    authDomain: "slack-clone-3ee5f.firebaseapp.com",
    projectId: "slack-clone-3ee5f",
    storageBucket: "slack-clone-3ee5f.appspot.com",
    messagingSenderId: "504724095384",
    appId: "1:504724095384:web:0d289f88dbe121f39d2bed"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// get database from firebase
const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;