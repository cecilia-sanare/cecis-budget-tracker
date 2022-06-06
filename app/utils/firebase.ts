// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDszU_OXxAEWyikjamELNTvrD-ipsV2Es8',
  authDomain: 'cecis-budget-tracker.firebaseapp.com',
  projectId: 'cecis-budget-tracker',
  storageBucket: 'cecis-budget-tracker.appspot.com',
  messagingSenderId: '962748511588',
  appId: '1:962748511588:web:203645989510bb2bcbf671',
  measurementId: 'G-GLYEMHR5TL'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);