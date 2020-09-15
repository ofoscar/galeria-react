import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCPv9dRFN1xoIq2DL9DurHcWazKUpg1TUY",
    authDomain: "galeria-react-737d1.firebaseapp.com",
    databaseURL: "https://galeria-react-737d1.firebaseio.com",
    projectId: "galeria-react-737d1",
    storageBucket: "galeria-react-737d1.appspot.com",
    messagingSenderId: "10743889436",
    appId: "1:10743889436:web:a56b84b0a7ae445d21a9d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};