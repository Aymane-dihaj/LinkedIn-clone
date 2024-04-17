import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBkhZVV2yS6diQdN2FAoXtgcsD3Pr32TLg",
    authDomain: "linkedin-clone-b97bc.firebaseapp.com",
    projectId: "linkedin-clone-b97bc",
    storageBucket: "linkedin-clone-b97bc.appspot.com",
    messagingSenderId: "35575708892",
    appId: "1:35575708892:web:866e2ddc2caa3e2d4b4819"
  };


  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  

export {db, auth};