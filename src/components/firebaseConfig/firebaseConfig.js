
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAiDtzYsizNJatnA1zou74ojNdOCugkXeM",
  authDomain: "coinscorecc.firebaseapp.com",
  databaseURL: "https://coinscorecc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "coinscorecc",
  storageBucket: "coinscorecc.appspot.com",
  messagingSenderId: "647159765156",
  appId: "1:647159765156:web:7dfca2c2c37bce0d8dae31",
  measurementId: "G-RYV9FS761G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Export
export const logoBannerDb = firebase.storage();
export default firebase;