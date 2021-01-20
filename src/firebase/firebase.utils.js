import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5IXJTASSLsWP93uduadfkEc8iFLgBKnE",
    authDomain: "nolan-clothing-db.firebaseapp.com",
    projectId: "nolan-clothing-db",
    storageBucket: "nolan-clothing-db.appspot.com",
    messagingSenderId: "27016669346",
    appId: "1:27016669346:web:538c2a33836a494279cffb",
    measurementId: "G-K9E2G3LT6F"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;