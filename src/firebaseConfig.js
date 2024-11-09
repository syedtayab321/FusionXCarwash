import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCwi1xpfR295-GR7QCcGsWNcF5yB0r8_b0",
  authDomain: "fusion-x-car-wash-c6397.firebaseapp.com",
  projectId: "fusion-x-car-wash-c6397",
  storageBucket: "fusion-x-car-wash-c6397.appspot.com",
  messagingSenderId: "365148842956",
  appId: "1:365148842956:web:15347b18506242be550b69",
  measurementId: "G-KRFE7TSBGJ"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
