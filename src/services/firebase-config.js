import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDCGDLjJydCe2l-9e_u6M2_ry3oBE2LUGQ",
  authDomain: "the-geek-store-fb873.firebaseapp.com",
  projectId: "the-geek-store-fb873",
  storageBucket: "the-geek-store-fb873.appspot.com",
  messagingSenderId: "1006146033808",
  appId: "1:1006146033808:web:09fb0b95cd8a391149e015"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);