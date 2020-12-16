import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBoCHAeD_BmkaBHSIQWr0GPMKwLKh-IS-s",
    authDomain: "crwn-db-95aae.firebaseapp.com",
    projectId: "crwn-db-95aae",
    storageBucket: "crwn-db-95aae.appspot.com",
    messagingSenderId: "1814102436",
    appId: "1:1814102436:web:bcb3af52333ead73208131"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;