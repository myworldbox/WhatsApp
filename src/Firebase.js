import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzeP-5S2bid9sN_HBXQZp7810OYxh7OkY",
  authDomain: "uniletsbefd-98.firebaseapp.com",
  projectId: "uniletsbefd-98",
  storageBucket: "uniletsbefd-98.appspot.com",
  messagingSenderId: "692444421334",
  appId: "1:692444421334:web:f290addc9845cc5f01bd77",
  measurementId: "G-EGYHWSZ0KC",
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;