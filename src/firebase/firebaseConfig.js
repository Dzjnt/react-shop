import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-shop-99529.firebaseapp.com",
  projectId: "react-shop-99529",
  storageBucket: "react-shop-99529.appspot.com",
  messagingSenderId: "85141959165",
  appId: "1:85141959165:web:e484ea0244fe0da4c9a994",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
