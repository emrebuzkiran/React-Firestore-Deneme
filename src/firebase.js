import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvkH42GXInaLFmwTOLGBOLAbfq-WSVpBg",
  authDomain: "lab0-24426.firebaseapp.com",
  projectId: "lab0-24426",
  storageBucket: "lab0-24426.appspot.com",
  messagingSenderId: "405813087909",
  appId: "1:405813087909:web:12863bf3be4bbf298d474c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
