import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAb0p2l9Ntf3AhFppAa7DpvUIGl9kqHsvU",
    authDomain: "diary-dc615.firebaseapp.com",
    projectId: "diary-dc615",
    storageBucket: "diary-dc615.appspot.com",
    messagingSenderId: "659105278765",
    appId: "1:659105278765:web:d11b8deab0428b8f1901a4"
};
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebase.firestore();


export { auth, db };