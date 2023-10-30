import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJfMZUD_256hX3HXpV1-TfCqBwk-LzDgg",
  authDomain: "netflix-51402.firebaseapp.com",
  projectId: "netflix-51402",
  storageBucket: "netflix-51402.appspot.com",
  messagingSenderId: "696571194692",
  appId: "1:696571194692:web:15618b01f1e70bba13bb11",
  measurementId: "G-9YJBV5RYDL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);