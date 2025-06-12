import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// firebase/firebaseConfig.js
export const firebaseConfig = {
  apiKey: "AIzaSyD6bifhu9yAL9jbQdFgGnV7pHPdqGBFTuk",
  authDomain: "schoolbell-aaa7b.firebaseapp.com",
  projectId: "schoolbell-aaa7b",
  storageBucket: "schoolbell-aaa7b.appspot.com",
  messagingSenderId: "110037957022",
  appId: "1:110037957022:android:afe83bd4f7487478a2be8f"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// auth와 firestore 인스턴스 생성
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, firebaseConfig };

