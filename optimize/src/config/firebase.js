// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvrRcTIdW8LTsO3jkIpZMHmlsLFlJWNuM",
  authDomain: "react-app-e49da.firebaseapp.com",
  projectId: "react-app-e49da",
  storageBucket: "react-app-e49da.firebasestorage.app",
  messagingSenderId: "338457550540",
  appId: "1:338457550540:web:d69d3e376aa24deea06c69",
  measurementId: "G-KHJV547YNM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const googleAuth = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const signupWithEmail = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signin = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
