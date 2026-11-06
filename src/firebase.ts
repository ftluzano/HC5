import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDeT8lkVzwgynbP0CKtLOObuewF7fD2Vw',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'quintin-de-borja-center.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'quintin-de-borja-center',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'quintin-de-borja-center.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '828809179012',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:828809179012:web:f7d85840a2f5b2f7fe37d1',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
