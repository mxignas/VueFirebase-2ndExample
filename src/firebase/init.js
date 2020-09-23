import firebase from 'firebase'
import firestore from 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyAA1R_qFmPx9rql5ljd453VBxjSqZwrBXY",
    authDomain: "udemy-chatapp-64fcc.firebaseapp.com",
    databaseURL: "https://udemy-chatapp-64fcc.firebaseio.com",
    projectId: "udemy-chatapp-64fcc",
    storageBucket: "udemy-chatapp-64fcc.appspot.com",
    messagingSenderId: "521289976212",
    appId: "1:521289976212:web:189e7f1e4cfeeae0872781",
    measurementId: "G-RRK1RMJ4B3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// exporting firestore to use it in the other components
export default firebaseApp.firestore()