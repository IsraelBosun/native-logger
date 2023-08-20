// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3VeGRWB1pATgVTAXfdf7WpPF5jqXx9b4",
  authDomain: "graceful-path-395016.firebaseapp.com",
  projectId: "graceful-path-395016",
  storageBucket: "graceful-path-395016.appspot.com",
  messagingSenderId: "82812267817",
  appId: "1:82812267817:web:488a7a269ee159a1781b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
