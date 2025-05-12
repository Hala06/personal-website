import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "personal-site-3a54a.firebaseapp.com",
  projectId: "personal-site-3a54a",
  storageBucket: "personal-site-3a54a.firebasestorage.app",
  messagingSenderId: "547194558440",
  appId: "1:547194558440:web:446235884aaf568e76f65d",
  measurementId: "G-XWHHJVVY17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
