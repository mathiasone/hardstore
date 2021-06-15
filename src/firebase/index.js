import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHJ3-uVKGMMkszMdMZmLOK8XBJwdFLCpY",
    authDomain: "hardstore-ferreyra.firebaseapp.com",
    projectId: "hardstore-ferreyra",
    storageBucket: "hardstore-ferreyra.appspot.com",
    messagingSenderId: "156907071864",
    appId: "1:156907071864:web:3afe40ae92e06e3b9a408d"
};
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// ARROW: export const getFirebase = () => app;
export function getFirebase(){
    return app;
}

// ARROW: export const getFirestore = () => firebase.firestore(app);
export function getFirestore(){
    return firebase.firestore(app);
}