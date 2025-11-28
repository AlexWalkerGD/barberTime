import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxURHYOTDMJjzhGjDZELRS5nFE7tQRMss",
  authDomain: "barbertime-d865c.firebaseapp.com",
  projectId: "barbertime-d865c",
  storageBucket: "barbertime-d865c.appspot.com",
  messagingSenderId: "543561041996",
  appId: "1:543561041996:web:8bf6d778fc60f2ee358ce9",
  measurementId: "G-Z1QKC3DNY4",
};

const app = initializeApp(firebaseConfig);
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
