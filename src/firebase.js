import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAu-yi9aKYNz543eYVKPBx6WB8wzXxmmFY",
  authDomain: "netflix-clone-b3da5.firebaseapp.com",
  databaseURL: "https://netflix-clone-b3da5.firebaseio.com",
  projectId: "netflix-clone-b3da5",
  storageBucket: "netflix-clone-b3da5.appspot.com",
  messagingSenderId: "941802524806",
  appId: "1:941802524806:web:8436e18a1161ec05ce8107",
  measurementId: "G-EQ9EWHBX1H",
};

// verify if firebase is already initialized if not initialize it
const firebaseApp = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
