// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrM6hpS_Wb-vFEBSgmLQE0oiAmhpxoDCk",
  authDomain: "auth-firebase-tailwind-26b37.firebaseapp.com",
  projectId: "auth-firebase-tailwind-26b37",
  storageBucket: "auth-firebase-tailwind-26b37.appspot.com",
  messagingSenderId: "1049044275194",
  appId: "1:1049044275194:web:bc02026818f6f4eac2de43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app