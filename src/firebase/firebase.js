import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDrWs0_WZKe6YJetS_nnxE1xAAOco1dhfA",
	authDomain: "hackathon-expertizo.firebaseapp.com",
	projectId: "hackathon-expertizo",
	storageBucket: "hackathon-expertizo.firebasestorage.app",
	messagingSenderId: "260825105857",
	appId: "1:260825105857:web:c83305ebf7d9e85af89b40",
	measurementId: "G-6HP60DPNQD"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage};