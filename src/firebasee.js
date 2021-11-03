import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "********************",
    authDomain: "********************",
    projectId: "********************",
    storageBucket: "********************",
    messagingSenderId: "********************",
    appId: "********************"
};
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebase.firestore();


export { auth, db };
