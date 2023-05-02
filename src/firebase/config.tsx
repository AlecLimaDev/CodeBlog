import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQpzs1kfZRIVhkTPTHY0O143VSoE_-Uss",
  authDomain: "codeblog-d6e57.firebaseapp.com",
  projectId: "codeblog-d6e57",
  storageBucket: "codeblog-d6e57.appspot.com",
  messagingSenderId: "884572793637",
  appId: "1:884572793637:web:a8cb043a338cebe48d88cc",
  measurementId: "G-SBTVLNTJN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
export { analytics };


