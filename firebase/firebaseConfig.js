import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNmaYuQTzKjHJuxZhcMfgjxX-TWCA598I",
  authDomain: "formula1-e08b1.firebaseapp.com",
  projectId: "formula1-e08b1",
  storageBucket: "formula1-e08b1.appspot.com", // Fixed typo
  messagingSenderId: "1050040648099",
  appId: "1:1050040648099:web:cf17c74d969a6f14a11a16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Disable authentication persistence (force login on every app start)
setPersistence(auth, inMemoryPersistence)
  .then(() => {
    console.log("Auth persistence set to 'none'. User must log in every time.");
  })
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });

export { app, auth, db, storage };
