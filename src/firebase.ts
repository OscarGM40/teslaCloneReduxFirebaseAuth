// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx0s4eCdbSGwh_DLRb9aInzfl7Nz92sjk",
  authDomain: "tesla-clone-redux-ts.firebaseapp.com",
  projectId: "tesla-clone-redux-ts",
  storageBucket: "tesla-clone-redux-ts.appspot.com",
  messagingSenderId: "485009450092",
  appId: "1:485009450092:web:886ca808ce802285fde449"
};

// Initialize Firebase,get the instance and export it
export const firebaseApp = initializeApp(firebaseConfig);

/* import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  // Check for user status
}); */