// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore,collection} from 'firebase/firestore'
 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSaI8Yz-iRhFAZXaRmLXFipknfUEThWS8",
  authDomain: "chatbox-526d8.firebaseapp.com",
  projectId: "chatbox-526d8",
  storageBucket: "chatbox-526d8.appspot.com",
  messagingSenderId: "774423185496",
  appId: "1:774423185496:web:7b900550630a09cc9da22d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
export const usersRef = collection(db,'users');
export const roomsRef = collection(db,'rooms');
