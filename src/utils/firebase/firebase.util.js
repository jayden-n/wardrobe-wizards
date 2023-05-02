import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXvSycHZ7ulveicr8pNTclhiA78NZlghA',
  authDomain: 'wardrobe-wizards-db.firebaseapp.com',
  projectId: 'wardrobe-wizards-db',
  storageBucket: 'wardrobe-wizards-db.appspot.com',
  messagingSenderId: '933019450470',
  appId: '1:933019450470:web:8e26368dc70dd301da81a7',
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

