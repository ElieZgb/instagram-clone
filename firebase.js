import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAUox_JH5JK5WkbQb3PX8UU8wHG8gMkJi0",
  authDomain: "instagram-clone-react-na-2ba82.firebaseapp.com",
  projectId: "instagram-clone-react-na-2ba82",
  storageBucket: "instagram-clone-react-na-2ba82.appspot.com",
  messagingSenderId: "876679083255",
  appId: "1:876679083255:web:9c68a521618c238ee10ff2"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export {firebase, db};