import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

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
const app = initializeApp(firebaseConfig);

export const logoBannerDb = getStorage(app);