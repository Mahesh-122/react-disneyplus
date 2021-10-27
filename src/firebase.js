import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCu0ghzDWF0mXQjmQ0QH4fOZiV6iiNP-wg",
  authDomain: "disneyplus-clone-83b7f.firebaseapp.com",
  projectId: "disneyplus-clone-83b7f",
  storageBucket: "disneyplus-clone-83b7f.appspot.com",
  messagingSenderId: "793001990586",
  appId: "1:793001990586:web:59cd3281d2436c06046583",
  measurementId: "G-0CTGYG5TNZ" 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;